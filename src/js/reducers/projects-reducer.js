import { REQUEST_PROJECTS, RECEIVE_PROJECTS } from '../actions/types';

function projectsReducer(
  projects = {
    isFetching: false,
    lastUpdated: 0,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return Object.assign({}, projects, {
        isFetching: true,
      });
    case RECEIVE_PROJECTS:
      return Object.assign({}, projects, {
        items: action.projects.reverse(),
        lastUpdated: action.receivedAt,
        isFetching: false,
      });
    default:
      return projects;
  }
}

export default projectsReducer;
