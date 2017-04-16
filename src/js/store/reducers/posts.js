import types from '../actions/types';

function posts(
  posts = {
    isFetching: false,
    lastUpdated: 0,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case types.ADD_POST:
      return Object.assign({}, posts, {
        items: [...posts.items, action.post],
        lastUpdated: Date.now(),
      });
    case types.REQUEST_POSTS:
      return Object.assign({}, posts, {
        isFetching: true,
      });
    case types.RECEIVE_POSTS:
      return Object.assign({}, posts, {
        items: action.posts.reverse(),
        lastUpdated: action.receivedAt,
        isFetching: false,
      });
    default:
      return posts;
  }
}

export default posts;
