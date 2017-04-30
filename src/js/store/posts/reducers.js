// @flow
import type { PostsState as State, Action } from '../flow-types';

const initialState: State = {
  isFetching: false,
  items: [],
  lastUpdated: 0,
};

function posts(posts: State = initialState, action: Action): State {
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, posts, {
        items: [...posts.items, action.payload],
        lastUpdated: Date.now(),
      });
    case 'REQUEST_POSTS':
      return Object.assign({}, posts, {
        isFetching: true,
      });
    case 'REQUEST_POSTS_ERROR':
      return Object.assign({}, posts, {
        isFetching: false,
      });
    case 'RECEIVE_POSTS':
      return Object.assign({}, posts, {
        items: action.payload.reverse(),
        lastUpdated: action.meta.receivedAt,
        isFetching: false,
      });
    default:
      return posts;
  }
}

export default posts;
