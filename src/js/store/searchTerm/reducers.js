import types from '../actions/types';

function searchTerm(state = '', action) {
  switch (action.type) {
    case types.SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
}

export default searchTerm;
