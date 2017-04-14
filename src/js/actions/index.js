import types from './types';

function addPost(post) {
  return { type: types.POSTS_ADD, payload: post };
}

function changeSearchTerm(value) {
  return { type: types.SEARCH_TERM, payload: value };
}

export { addPost, changeSearchTerm };
