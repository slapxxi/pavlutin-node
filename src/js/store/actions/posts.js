import types from './types';

function addPost(post) {
  return {
    type: types.ADD_POST,
    payload: post,
  };
}

function requestPosts() {
  return {
    type: types.REQUEST_POSTS,
  };
}

function requestPostsError(e) {
  return {
    type: types.REQUEST_POSTS_ERROR,
    payload: e,
  };
}

function receivePosts(json) {
  return {
    type: types.RECEIVE_POSTS,
    payload: json.posts,
    meta: {
      receivedAt: Date.now(),
    },
  };
}

function fetchPosts() {
  return function fetchPostsThunk(dispatch) {
    dispatch(requestPosts());
    return fetch('/api/v1/posts')
      .then((r) => {
        if (!r.ok) {
          throw new Error(`Response Status ${r.status}`);
        }
        return r.json();
      })
      .then(json => dispatch(receivePosts(json)))
      .catch(e => dispatch(requestPostsError(e)));
  };
}

export {
  addPost,
  requestPosts,
  requestPostsError,
  receivePosts,
  fetchPosts,
};
