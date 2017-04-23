import types from '../actions/types';

function requestProjects() {
  return {
    type: types.REQUEST_PROJECTS,
  };
}

function requestProjectsError(e) {
  return {
    type: types.REQUEST_PROJECTS_ERROR,
    payload: e,
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
      .then((r) => {
        if (!r.ok) {
          throw new Error(`Response Status ${r.status}`);
        }
        return r.json();
      })
      .then(json => dispatch(receiveProjects(json)))
      .catch(e => dispatch(requestProjectsError(e)));
  };
}

export {
  requestProjects,
  requestProjectsError,
  receiveProjects,
  fetchProjects,
};
