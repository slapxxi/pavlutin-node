import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

it('returns initial state', () => {
  expect(store.getState()).toEqual({
    searchTerm: '',
    posts: {
      isFetching: false,
      lastUpdated: 0,
      items: [],
    },
    projects: {
      isFetching: false,
      lastUpdated: 0,
      items: [],
    },
  });
});
