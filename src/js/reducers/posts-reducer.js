import { ADD_POST, REQUEST_POSTS, RECEIVE_POSTS } from '../actions/types';

function postsReducer(
  posts = {
    isFetching: false,
    lastUpdated: 0,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case ADD_POST:
      return Object.assign({}, posts, {
        items: [...posts.items, action.post],
        lastUpdated: Date.now(),
      });
    case REQUEST_POSTS:
      return Object.assign({}, posts, {
        isFetching: true,
      });
    case RECEIVE_POSTS:
      return Object.assign({}, posts, {
        items: action.posts.reverse(),
        lastUpdated: action.receivedAt,
        isFetching: false,
      });
    default:
      return posts;
  }
}

export default postsReducer;
