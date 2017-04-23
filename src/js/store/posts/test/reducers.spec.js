import posts from '../reducers';
import {
  addPost,
  requestPosts,
  requestPostsError,
  receivePosts,
} from '../actions';

const post = { title: 'A first post' };

it('returns initial state', () => {
  const state = posts(undefined, {});
  expect(state).toEqual({
    isFetching: false,
    lastUpdated: 0,
    items: [],
  });
});

it('handles adding post', () => {
  const state = posts({ items: [] }, addPost(post));
  expect(state.items).toContain(post);
});

it('handles receiving posts', () => {
  const state = posts(
    undefined,
    receivePosts({ posts: [post] }),
  );
  expect(state.items.length).not.toBe(0);
  expect(state.isFetching).toBe(false);
  expect(state.lastUpdated).not.toBe(0);
});

it('handles requesting posts', () => {
  const state = posts({ items: [] }, requestPosts());
  expect(state.isFetching).toBe(true);
});

it('handles request errors', () => {
  const state = posts(
    { items: [], isFetching: true },
    requestPostsError(),
  );
  expect(state.isFetching).toBe(false);
});
