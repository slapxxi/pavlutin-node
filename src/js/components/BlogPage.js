import React from 'react';
import PostsContainer from './PostsContainer';
import { setTitle } from '../utils';

function BlogPage({ match }) {
  const { tag } = match.params;
  if (tag) {
    setTitle(`Tag "${tag}"`);
  } else {
    setTitle('Blog');
  }
  return (
    <div className="blogpage">
      <h1>Blog</h1>
      <PostsContainer tag={tag} />
    </div>
  );
}

export default BlogPage;
