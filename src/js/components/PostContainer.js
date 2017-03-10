import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';


function PostContainer({ posts, params }) {
  const { slug } = params;
  const post = _.find(posts, p => p.slug === slug);
  if (post) {
    return <Post post={post} />;
  }
  return null;
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(PostContainer);
