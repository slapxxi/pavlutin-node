// @flow
import PostsAPI from '../../services/PostsAPI';
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
  return (dispatch: Dispatch, getState: Function) => {
    if (getState().posts.isFetching) {
      return null;
    }
    dispatch(requestPosts());
    return PostsAPI.get()
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Response Status ${response.status}`);
        }
        return response.json();
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
