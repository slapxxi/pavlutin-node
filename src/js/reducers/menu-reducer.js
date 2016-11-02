import { MENU_HIDE, MENU_TOGGLE } from '../actions/actions';


export default function menuReducer(state=false, action) {
  switch (action.type) {
    case MENU_TOGGLE: return !state;
    case MENU_HIDE: return false;
    default: return state;
  }
}
