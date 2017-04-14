import { combineReducers } from 'redux';
import projectsReducer from './projects-reducer';
import postsReducer from './posts-reducer';
import searchTermReducer from './search-term-reducer';

export default combineReducers({
  searchTerm: searchTermReducer,
  projects: projectsReducer,
  posts: postsReducer,
});
