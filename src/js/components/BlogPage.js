import React from 'react';
import PostsContainer from './PostsContainer';

function BlogPage({ match }) {
  const { tag } = match.params;
  return (
    <div className="blogpage">
      <h1>Blog</h1>
      <PostsContainer tag={tag} />
    </div>
  );
}

export default BlogPage;
