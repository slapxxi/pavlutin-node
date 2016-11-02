import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Menu from './components/Menu';
import rootReducer from './reducers/root-reducer';
import { MENU_HIDE } from './actions/actions';


$(function() {
  enableProgressiveEnhancement();

  const store = createStore(rootReducer);

  store.subscribe(() => { subscribeMenu(store) });

  $(window).on('resize.menu', function(e) {
    const mq = window.matchMedia('(min-width: 600px)');
    if (mq.matches) {
      store.dispatch({type: MENU_HIDE})
    }
  });

  ReactDOM.render(<Provider store={store}><Menu/></Provider>, document.querySelector('.menu-container'));
});

function enableProgressiveEnhancement() {
  $('body').addClass('js');
}

function subscribeMenu(store) {
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
