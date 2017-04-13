import React from 'react';
import Transition from 'react-transition-group/CSSTransitionGroup';
import PostPreview from './PostPreview';

function Posts({ posts, tag }) {
  if (posts.length === 0) {
    return <section className="posts"><p>No posts found.</p></section>;
  }
  return (
    <section className="posts">
      <ul className="nav-list">
        <Transition
          transitionName="fade"
          transitionAppear
          transitionAppearTimeout={250}
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {
          posts.map(p => (
            <li key={p.id} className="posts__post">
              <PostPreview post={p} activeTag={tag} />
            </li>
          ))
          }
        </Transition>
      </ul>
    </section>
  );
}

export default Posts;
