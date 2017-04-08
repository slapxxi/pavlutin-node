import React from 'react';
import PostPreview from './PostPreview';

function Posts({ posts, tag }) {
  if (posts.length === 0) {
    return <section className="posts"><p>No posts found.</p></section>;
  }
  return (
    <section className="posts">
      <ul className="nav-list">
        {
          posts.map(p => (
            <li key={p.id} className="posts__post">
              <PostPreview post={p} activeTag={tag} />
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Posts;
