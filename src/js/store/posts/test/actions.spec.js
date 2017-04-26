import {
  addPost,
  requestPosts,
  requestPostsError,
} from '../actions';

test('addPost returns action', () => {
  expect(addPost()).toMatchSnapshot();
});

test('requestPosts returns action', () => {
  expect(requestPosts()).toMatchSnapshot();
});

test('requestPostsError returns action', () => {
  expect(requestPostsError({})).toMatchSnapshot();
});
