import searchTerm from '../reducers';
import { changeSearchTerm } from '../actions';

it('returns initial state', () => {
  const state = searchTerm(undefined, {});
  expect(state).toBe('');
});

it('handles changing search term', () => {
  const state = searchTerm(undefined, changeSearchTerm('test'));
  expect(state).toBe('test');
});
