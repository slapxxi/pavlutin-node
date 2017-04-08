import React from 'react';
import PostsContainer from './PostsContainer';
import { setTitle } from '../utils';

function BlogPage({ match }) {
  const { tag } = match.params;
  const pageTitle = tag ? `Tag "${tag}"` : 'Blog';
  setTitle(pageTitle);
  return (
    <div className="blogpage">
      <h1>{ pageTitle }</h1>
      <PostsContainer tag={tag} />
    </div>
  );
}

export default BlogPage;
