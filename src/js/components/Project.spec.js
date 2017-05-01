import React from 'react';
import render from 'react-test-renderer';
import Project from './Project';

const project = { title: 'Test' };

it('renders project', () => {
  const tree = render.create(<Project project={project} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
