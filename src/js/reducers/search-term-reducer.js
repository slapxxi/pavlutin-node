const { SEARCH_TERM } = require('../actions/types');


function searchTermReducer(state='', action) {
  switch(action.type) {
    case SEARCH_TERM: return action.payload;
    default: return state;
  }
}

module.exports = searchTermReducer;
