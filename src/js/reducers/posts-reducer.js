const _ = require('lodash');
const { POSTS_ADD, POSTS_SORT_BY } = require('../actions/types');


/**
 * Redux reducer. Reduces posts state based on the action.
 * @param  {array}  [posts=[]] State
 * @param  {object} action Action
 * @return {array} State
 */
function postsReducer(posts=[], action) {
  switch(action.type) {
    case POSTS_ADD: return [...posts, action.payload];
    default: return posts;
  }
}

module.exports = postsReducer;
