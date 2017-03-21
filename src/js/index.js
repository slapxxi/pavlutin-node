import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import ProjectsPage from './components/ProjectsPage';
import PostContainer from './components/PostContainer';
import rootReducer from './reducers/root-reducer';
import { addPost } from './actions';


const API_URL = '/api/v1/posts';

const storeParams = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, storeParams);

// Replace fetch with univsally supported API
fetch(API_URL).then(res => res.json()).then((result) => {
  result.posts.forEach((post) => {
    store.dispatch(addPost(post));
  });
}).catch(error => console.log('Error fetching and parsing data', error));

const appProvider = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />

        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/(:slug)" component={PostContainer} />

        <Route path="/projects" component={ProjectsPage} />
      </Route>
    </Router>
  </Provider>
);

$(() => {
  $('body').addClass('js');

  ReactDOM.render(appProvider, document.querySelector('.app'));
});
