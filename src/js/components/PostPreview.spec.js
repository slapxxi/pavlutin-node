import React from 'react';
import render from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import PostPreview from './PostPreview';

const post = {
  id: 0,
  title: 'Test Post',
  content: 'empty',
  description: 'empty',
  author: 'bot',
  slug: 'test-post',
  tags: ['test', 'react'],
};

it('renders', () => {
  const tree = render.create(
    <Router>
      <PostPreview post={post} />
    </Router>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders with active tag', () => {
  const tree = render.create(
    <Router>
      <PostPreview post={post} activeTag="tag" />
    </Router>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
