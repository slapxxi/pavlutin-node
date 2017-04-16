import { combineReducers } from 'redux';
import posts from './posts';
import projects from './projects';
import searchTerm from './searchTerm';

export default combineReducers({
  searchTerm,
  projects,
  posts,
});
