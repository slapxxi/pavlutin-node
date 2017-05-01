import posts from '../reducers';
import {
  addPost,
  requestPosts,
  requestPostsError,
  receivePosts,
} from '../actions';

const post = { title: 'A first post' };

beforeAll(() => {
  Date.now = jest.fn(() => 100100100);
});

it('returns initial state', () => {
  const state = posts(undefined, {});
  expect(state).toMatchSnapshot();
});

it('handles adding post', () => {
  const state = posts(undefined, addPost(post));
  expect(state).toMatchSnapshot();
});

it('handles receiving posts', () => {
  const state = posts(
    undefined,
    receivePosts({ posts: [post] }),
  );
  expect(state).toMatchSnapshot();
});

it('handles requesting posts', () => {
  const state = posts({ items: [] }, requestPosts());
  expect(state).toMatchSnapshot();
});

it('handles request errors', () => {
  const state = posts(
    { items: [], isFetching: true },
    requestPostsError(),
  );
  expect(state).toMatchSnapshot();
});
