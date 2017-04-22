import { find } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { searchPosts } from '../store/selectors/posts';
import Post from './Post';
import PageNotFound from './PageNotFound';
import Spinner from './Spinner';
import { setTitle } from '../utils';

function PostPage({ posts, isFetching, match }) {
  const { slug } = match.params;
  if (isFetching) {
    return <Spinner />;
  }
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

function mapStateToProps(state) {
  return {
    posts: searchPosts(state),
    isFetching: state.posts.isFetching,
  };
}

export default connect(mapStateToProps)(PostPage);
