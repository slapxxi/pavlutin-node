import types from '../actions/types';

function projects(
  projects = {
    isFetching: false,
    lastUpdated: 0,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case types.REQUEST_PROJECTS:
      return Object.assign({}, projects, {
        isFetching: true,
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
