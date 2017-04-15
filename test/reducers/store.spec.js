import { expect } from 'chai';
import { createStore } from 'redux';
import rootReducer from '../../src/js/reducers/root-reducer';

describe('Redux Store', () => {
  const store = createStore(rootReducer);

  it('returns initial state', () => {
    expect(store.getState()).to.eql({
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
});
