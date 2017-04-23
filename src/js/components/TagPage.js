import React from 'react';
import { connect } from 'react-redux';
import { searchPostsWithTag } from '../store/posts/selectors';
import Posts from './Posts';
import Spinner from './Spinner';
import Search from '../containers/Search';
import { setTitle } from '../utils';

function TagPage({ posts, isFetching, match }) {
  const { tag } = match.params;
  const title = `Tag "${tag}"`;
  setTitle(title);
  return (
    <div className="blogpage">
      <h1>{title}</h1>
      <div>
        <Search />
        {isFetching ? <Spinner /> : <Posts posts={posts} tag={tag} />}
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    posts: searchPostsWithTag(state, props),
    isFetching: state.posts.isFetching,
  };
}

export default connect(mapStateToProps)(TagPage);
