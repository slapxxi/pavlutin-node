import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import rootReducer from './store/reducers/root';

const storeParams = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let middleware;

if (process.env.NODE_ENV !== 'production') {
  middleware = applyMiddleware(thunk, logger);
} else {
  middleware = applyMiddleware(thunk);
}

const store = createStore(
  rootReducer,
  storeParams,
  middleware,
);

const appProvider = (
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
);

ReactDOM.render(appProvider, document.querySelector('.react-app'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>, document.querySelector('.app'),
    );
  });
}

$(() => {
  $('body').addClass('js');
});
