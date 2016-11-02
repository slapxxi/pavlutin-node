import { combineReducers } from 'redux';
import menuReducer from './menu-reducer';

export default combineReducers({
  isMenuActive: menuReducer
});
