const { MENU_HIDE, MENU_TOGGLE } = require('../actions/types');


/**
 * Redux reducer. Determines whether menu is active.
 * @param  {boolean} [state=false] Whether menu active
 * @param  {object}  action        Action
 * @return {boolean}               State
 */
function menuReducer(state=false, action) {
  switch (action.type) {
    case MENU_TOGGLE: return !state;
    case MENU_HIDE: return false;
    default: return state;
  }
}

module.exports = menuReducer;
