import { chunk } from 'lodash';
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
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {
          chunk(posts, 3).map(ch => (
            <div className="posts__row">
              { ch.map(p => (
                <li key={p.id} className="posts__post">
                  <PostPreview post={p} activeTag={tag} />
                </li>
              ))}
            </div>
          ))
          }
        </Transition>
      </ul>
    </section>
  );
}

export default Posts;
