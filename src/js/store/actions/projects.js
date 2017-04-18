import types from './types';

function requestProjects() {
  return {
    type: types.REQUEST_PROJECTS,
  };
}

function receiveProjects(json) {
  return {
    type: types.RECEIVE_PROJECTS,
    payload: json.projects,
    meta: {
      receivedAt: Date.now(),
    },
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

export { requestProjects, receiveProjects, fetchProjects };
