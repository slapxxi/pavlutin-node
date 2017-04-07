import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import rootReducer from './reducers/root-reducer';
import { addPost } from './actions';

const API_URL = '/api/v1/posts';

const storeParams = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, storeParams);

// Replace fetch with univsally supported API
fetch(API_URL).then(res => res.json()).then((result) => {
  result.posts.reverse().forEach((post) => {
    store.dispatch(addPost(post));
  });
}).catch(error => console.log('Error fetching and parsing data', error));

const appProvider = (
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
);

ReactDOM.render(appProvider, document.querySelector('.app'));

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
