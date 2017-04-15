import { find } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../utils';
import { fetchPosts } from '../actions';
import PostPage from './PostPage';
import TagPage from './TagPage';
import Posts from './Posts';
import Spinner from './Spinner';
import Search from './Search';

class BlogPage extends React.Component {
  componentDidMount() {
    if (this.props.lastUpdated === 0) {
      this.props.fetchPosts();
    }
  }

  render() {
    const { posts, isFetching } = this.props;
    const { tag, slug } = this.props.match.params;
    if (slug) {
      return (
        <PostPage
          posts={posts}
          slug={slug}
          isFetching={isFetching}
        />
      );
    }
    if (tag) {
      return (
        <TagPage
          posts={posts}
          tag={tag}
          isFetching={isFetching}
        />
      );
    }
    setTitle('Blog');
    return (
      <div className="blogpage">
        <h1>Blog</h1>
        <div>
          <Search />
          {this.props.isFetching ? <Spinner /> : <Posts posts={posts} />}
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
