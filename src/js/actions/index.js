const uuid = require('uuid');
const types = require('./types');


/**
 * Redux action creator. Returns action for adding a post.
 * @param  {object} post Posts data
 * @return {object} Action
 */
function addPost(post) {
  return {type: types.POSTS_ADD, payload: post};
}

/**
 * Redux action creator. Return posts sorting action.
 * @param  {function} sortFn Sorting function
 * @return {object} Action
 */
function sortPosts(sortFn) {
  return {type: types.POSTS_SORT_BY, payload: sortFn};
}

/**
 * Redux action creator. Return menu toggling action.
 * @return {object} Action
 */
function toggleMenu() {
  return {type: types.MENU_TOGGLE};
}

module.exports = {addPost, sortPosts, toggleMenu};
