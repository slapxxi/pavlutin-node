import { expect } from 'chai';
import searchTermReducer from '../../src/js/reducers/search-term-reducer';
import { changeSearchTerm } from '../../src/js/actions';

describe('searchTermReducer', () => {
  it('returns initial state', () => {
    const result = searchTermReducer(undefined, { type: '' });
    expect(result).to.eq('');
  });

  it('changes search term', () => {
    const result = searchTermReducer(undefined, changeSearchTerm('test'));
    expect(result).to.eq('test');
  });
});
