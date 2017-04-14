import { POSTS_ADD } from '../actions/types';

function postsReducer(posts = [], action) {
  switch (action.type) {
    case POSTS_ADD: return [...posts, action.payload];
    default: return posts;
  }
}

export default postsReducer;
