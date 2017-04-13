import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import PageNotFound from './PageNotFound';
import { setTitle } from '../utils';

function PostContainer({ posts, match }) {
  const { slug } = match.params;
  const post = _.find(posts, p => p.slug === slug);
  if (post) {
    setTitle(post.title);
    return (
      <section className="blogpage">
        <Post post={post} />
      </section>
    );
  }
  return <PageNotFound />;
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(PostContainer);
