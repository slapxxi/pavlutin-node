const types = require('./types');


/**
 * Redux action creator. Returns action for adding a post.
 * @param  {object} post Posts data
 * @return {object} Action
 */
function addPost(post) {
  return { type: types.POSTS_ADD, payload: post };
}

/**
 * Redux action creator. Return posts sorting action.
 * @param  {string} field Field to sort by
 * @return {object} Action
 */
function sortPostsBy(field) {
  return { type: types.POSTS_SORT_BY, payload: field };
}

/**
 * Redux action creator. Return search term updating action.
 * @param  {string} value Search term value
 * @return {object} Action
 */
function changeSearchTerm(value) {
  return { type: types.SEARCH_TERM, payload: value };
}

/**
 * Redux action creator. Return menu toggling action.
 * @return {object} Action
 */
function toggleMenu() {
  return { type: types.MENU_TOGGLE };
}

module.exports = { addPost, sortPostsBy, changeSearchTerm, toggleMenu };
