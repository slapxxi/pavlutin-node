import React from 'react';
import render from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Tags from './Tags';

const tags = [
  'test',
  'mock',
];

it('renders tags', () => {
  const tree = render.create(
    <Router>
      <Tags tags={tags} />
    </Router>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders tags with active tag', () => {
  const tree = render.create(
    <Router>
      <Tags tags={tags} activeTag="test" />
    </Router>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders tags with custom className', () => {
  const tree = render.create(
    <Router>
      <Tags tags={tags} className="test" />
    </Router>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
