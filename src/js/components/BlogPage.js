import { find } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../utils';
import { fetchPosts } from '../actions';
import Post from './Post';
import Posts from './Posts';
import Spinner from './Spinner';
import Search from './Search';
import PageNotFound from './PageNotFound';

class BlogPage extends React.Component {
  componentDidMount() {
    if (this.props.lastUpdated === 0) {
      this.props.fetchPosts();
    }
  }

  filterByTag() {
    const { match, posts } = this.props;
    const { tag } = match.params;
    return !tag ? posts : posts.filter(p => p.tags.includes(tag));
  }

  renderPost(slug) {
    if (this.props.isFetching) {
      return <Spinner />;
    }
    const { posts } = this.props;
    const post = find(posts, p => p.slug === slug);
    if (!post) {
      return <PageNotFound />;
    }
    setTitle(post.title);
    return (
      <section className="postpage">
        <Post post={post} />
      </section>
    );
  }

  render() {
    const { tag, slug } = this.props.match.params;
    if (slug) {
      return this.renderPost(slug);
    }
    const { isFetching } = this.props;
    const pageTitle = tag ? `Tag "${tag}"` : 'Blog';
    const postsByTag = this.filterByTag();
    setTitle(pageTitle);
    return (
      <div className="blogpage">
        <h1>{ pageTitle }</h1>
        <div>
          <Search />
          {isFetching ? <Spinner /> : <Posts posts={postsByTag} tag={tag} />}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts, searchTerm }) {
  return {
    posts: filterPosts(posts.items, searchTerm),
    lastUpdated: posts.lastUpdated,
    isFetching: posts.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts() {
      dispatch(fetchPosts());
    },
  };
}

function filterPosts(posts, searchTerm) {
  return searchPosts(posts, searchTerm);
}

function searchPosts(posts, searchTerm) {
  if (searchTerm.trim() === '') {
    return posts;
  }
  const terms = searchTerm
    .trim()
    .split(' ')
    .filter(t => t.length >= 3)
    .map(term => new RegExp(term, 'i'));
  return posts.filter((post) => {
    const description = post.description || '';
    return !!find(terms, term => post.title.match(term) || description.match(term));
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
