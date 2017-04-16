import { expect } from 'chai';
import searchTerm from '../../src/js/store/reducers/searchTerm';
import { changeSearchTerm } from '../../src/js/store/actions/searchTerm';

describe('searchTerm reducer', () => {
  it('returns initial state', () => {
    const result = searchTerm(undefined, { type: '' });
    expect(result).to.eq('');
  });

  it('changes search term', () => {
    const result = searchTerm(undefined, changeSearchTerm('test'));
    expect(result).to.eq('test');
  });
});
