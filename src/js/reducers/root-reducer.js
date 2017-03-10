import { combineReducers } from 'redux';
import projectsReducer from './projects-reducer';
import postsReducer from './posts-reducer';
import menuReducer from './menu-reducer';
import searchTermReducer from './search-term-reducer';


export default combineReducers({
  isMenuActive: menuReducer,
  searchTerm: searchTermReducer,
  projects: projectsReducer,
  posts: postsReducer,
});
