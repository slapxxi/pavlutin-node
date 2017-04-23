import { combineReducers } from 'redux';
import posts from '../posts/reducers';
import projects from '../projects/reducers';
import searchTerm from '../searchTerm/reducers';

export default combineReducers({
  searchTerm,
  projects,
  posts,
});
