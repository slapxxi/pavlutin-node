// @flow
import React from 'react';
import { PostPreview } from './Post';

type T = {
  id: number,
};

function Posts({ posts }: { posts: Array<T> }) {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }
  return (
    <ul className="nav-list posts">
      { posts.map(mapPostToListItem) }
    </ul>
  );
}

function mapPostToListItem(post: T) {
  return (
    <li key={post.id} className="posts__post">
      <PostPreview post={post} />
    </li>
  );
}

export default Posts;
