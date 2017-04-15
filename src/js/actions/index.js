import types from './types';

function addPost(post) {
  return {
    type: types.ADD_POST,
    post,
  };
}

function requestPosts() {
  return {
    type: 'REQUEST_POSTS',
  };
}

function requestProjects() {
  return {
    type: 'REQUEST_PROJECTS',
  };
}

function receivePosts(json) {
  return {
    type: 'RECEIVE_POSTS',
    posts: json.posts,
    receivedAt: Date.now(),
  };
}

function receiveProjects(json) {
  return {
    type: 'RECEIVE_PROJECTS',
    projects: json.projects,
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

function fetchProjects() {
  return function fetchProjectsThunk(dispatch) {
    dispatch(requestProjects());
    return fetch('/api/v1/projects')
      .then(r => r.json())
      .then(json => dispatch(receiveProjects(json)));
  };
}

function changeSearchTerm(value) {
  return {
    type: types.SEARCH_TERM,
    payload: value,
  };
}

export {
  addPost,
  fetchPosts,
  requestPosts,
  receivePosts,
  fetchProjects,
  requestProjects,
  receiveProjects,
  changeSearchTerm,
};
