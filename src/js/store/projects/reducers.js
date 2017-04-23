import types from '../actions/types';

const initialState = {
  isFetching: false,
  items: [],
  lastUpdated: 0,
};

function projects(projects = initialState, action) {
  switch (action.type) {
    case types.REQUEST_PROJECTS:
      return Object.assign({}, projects, {
        isFetching: true,
      });
    case types.REQUEST_PROJECTS_ERROR:
      return Object.assign({}, projects, {
        isFetching: false,
      });
    case types.RECEIVE_PROJECTS:
      return Object.assign({}, projects, {
        items: action.payload.reverse(),
        lastUpdated: action.meta.receivedAt,
        isFetching: false,
      });
    default:
      return projects;
  }
}

export default projects;
