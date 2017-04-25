import React from 'react';
import render from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Posts from './Posts';

const posts = [
  { id: 0, title: 'First Post', tags: ['js'] },
  { id: 1, title: 'Second Post' },
];

it('renders posts', () => {
  const tree = render.create(<Router><Posts posts={posts} /></Router>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders posts with active tag', () => {
  const tree = render.create(
    <Router>
      <Posts posts={posts} tag="tag" />
    </Router>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders message when there are no posts', () => {
  const tree = render.create(<Posts posts={[]} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
