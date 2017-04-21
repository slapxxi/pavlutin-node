import { chunk, reduce } from 'lodash';
import React from 'react';
import PostPreview from './PostPreview';

function Posts({ posts, tag }) {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }
  return (
    <section className="posts">
      <ul className="nav-list">
        {mapPostsToRows(posts, tag)}
      </ul>
    </section>
  );
}

function mapPostsToRows(posts, tag) {
  return chunk(posts, 3).map((ch) => {
    const id = reduce(ch, (sum, n) => `${sum}#${n.id}`, '');
    return (
      <div key={id} className="posts__row">
        {ch.map(mapPostToListItem(tag))}
      </div>
    );
  });
}

function mapPostToListItem(tag) {
  return function mapPostToListItemWithTag(p) {
    return (
      <li key={p.id} className="posts__post">
        <PostPreview post={p} activeTag={tag} />
      </li>
    );
  };
}

export default Posts;
