import { searchPosts } from '../selectors';

const state = {
  posts: {
    items: [
      { title: 'test' },
      { title: 'hello' },
    ],
  },
  searchTerm: 'test',
};

it('gets empty array when there are no posts', () => {
  const s = Object.assign({}, state, { posts: { items: [] } });
  const posts = searchPosts(s);
  expect(posts).toEqual([]);
});

it('gets all posts when there is no search term', () => {
  const s = Object.assign({}, state, { searchTerm: '' });
  const posts = searchPosts(s);
  expect(posts).toEqual([{ title: 'test' }, { title: 'hello' }]);
});

it('gets posts with title matching search term', () => {
  const posts = searchPosts(state);
  expect(posts).toEqual([{ title: 'test' }]);
});
