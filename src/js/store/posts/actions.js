// @flow
import type { Action, Post, Dispatch } from '../flow-types';

function addPost(post: Post): Action {
  return {
    type: 'ADD_POST',
    payload: post,
  };
}

function requestPosts(): Action {
  return {
    type: 'REQUEST_POSTS',
  };
}

function requestPostsError(e: Error): Action {
  return {
    type: 'REQUEST_POSTS_ERROR',
    payload: e,
  };
}

function receivePosts(data: {posts: Array<Post>}): Action {
  return {
    type: 'RECEIVE_POSTS',
    payload: data.posts,
    meta: {
      receivedAt: Date.now(),
    },
  };
}

function fetchPosts() {
  return function fetchPostsThunk(dispatch: Dispatch) {
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
