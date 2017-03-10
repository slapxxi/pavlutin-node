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
import Menu from './components/Menu';
import rootReducer from './reducers/root-reducer';
import { addPost, toggleMenu } from './actions';


const API_URL = '/api/v1/posts';

const storeParams = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, storeParams);

fetch(API_URL).then(res => res.json()).then((result) => {
  result.posts.forEach((post) => {
    store.dispatch(addPost(post));
  });
}).catch(error => console.log('Error fetching and parsing data', error));

store.subscribe(() => {
  updateMenuAppearance(store);
});

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

const menuProvider = (
  <Provider store={store}>
    <Menu />
  </Provider>
);

$(() => {
  $('body').addClass('js');

  ReactDOM.render(appProvider, document.querySelector('.app'));
  ReactDOM.render(menuProvider, document.querySelector('.menu-container'));

  // Not supported in IE < 10
  $(window).on('resize.menu', () => {
    const mq = window.matchMedia('(min-width: 600px)');
    if (mq.matches) {
      store.dispatch(toggleMenu());
    }
  });
});

function updateMenuAppearance(store) {
  const { isMenuActive } = store.getState();
  const $header = $('.header');
  if (isMenuActive) {
    $header.addClass('header_fullscreen');
    $header.addClass('header_theme_inverse');
    $header.siblings().hide();
  } else {
    $header.removeClass('header_fullscreen');
    $header.removeClass('header_theme_inverse');
    $header.siblings().show();
  }
}
