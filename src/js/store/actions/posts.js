import types from './types';

function addPost(post) {
  return {
    type: types.ADD_POST,
    post,
  };
}

function requestPosts() {
  return {
    type: types.REQUEST_POSTS,
  };
}

function receivePosts(json) {
  return {
    type: types.RECEIVE_POSTS,
    posts: json.posts,
    receivedAt: Date.now(),
  };
}

function fetchPosts() {
  return function fetchPostsThunk(dispatch) {
    dispatch(requestPosts());
    return fetch('/api/v1/posts')
      .then(r => r.json())
      .then(json => dispatch(receivePosts(json)));
  };
}

export { addPost, requestPosts, receivePosts, fetchPosts };
