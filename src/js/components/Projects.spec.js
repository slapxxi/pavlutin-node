import React from 'react';
import render from 'react-test-renderer';
import Projects from './Projects';

const projects = [
  { id: 0, title: 'First Projects' },
  { id: 1, title: 'Second Project' },
];

it('renders projects', () => {
  const tree = render.create(<Projects projects={projects} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
