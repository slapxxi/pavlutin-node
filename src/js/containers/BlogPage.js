import { find } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { setTitle } from '../utils';
import { fetchPosts } from '../actions';
import Search from './Search';
import PostPage from '../components/PostPage';
import TagPage from '../components/TagPage';
import Posts from '../components/Posts';
import Spinner from '../components/Spinner';

class BlogPage extends React.Component {
  componentDidMount() {
    if (this.props.lastUpdated === 0) {
      this.props.fetchPosts();
    }
  }

  render() {
    const { match, posts, isFetching } = this.props;
    setTitle('Blog');
    return (
      <div>
        <Route
          exact
          path={`${match.url}`}
          render={() =>
            <div className="blogpage">
              <h1>Blog</h1>
              <Search />
              {isFetching ? <Spinner /> : <Posts posts={posts} />}
            </div>
          }
        />
        <Route
          exact
          path={`${match.url}/:slug`}
          render={({ match }) =>
            <PostPage posts={posts} slug={match.params.slug} isFetching={isFetching} />
          }
        />
        <Route
          exact
          path={`${match.url}/tag/:tag`}
          render={({ match }) =>
            <TagPage posts={posts} tag={match.params.tag} isFetching={isFetching} />
          }
        />
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
