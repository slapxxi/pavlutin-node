import types from './types';

function changeSearchTerm(value) {
  return {
    type: types.SEARCH_TERM,
    payload: value,
  };
}

export { changeSearchTerm };
