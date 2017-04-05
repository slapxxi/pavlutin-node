import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Post } from './Post';


function PostContainer({ posts, match }) {
  const { slug } = match.params;
  const post = _.find(posts, p => p.slug === slug);
  if (post) {
    return (
      <section className="blogpage">
        <Post post={post} />
      </section>
    );
  }
  return null;
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(PostContainer);
