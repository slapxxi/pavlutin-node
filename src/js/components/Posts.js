import React from 'react';
import { PostPreview } from './Post';

function Posts({ posts }) {
  if (posts.length === 0) {
    return <section className="posts"><p>No posts found.</p></section>;
  }
  return (
    <section className="posts">
      <ul className="nav-list">
        {
          posts.map(p => (
            <li key={p.id} className="posts__post">
              <PostPreview post={p} />
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Posts;
