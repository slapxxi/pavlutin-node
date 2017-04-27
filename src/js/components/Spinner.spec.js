import React from 'react';
import render from 'react-test-renderer';
import Spinner from './Spinner';

it('renders spinner', () => {
  const tree = render.create(<Spinner />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders spinner with color', () => {
  const tree = render.create(<Spinner color="blue" />);
  expect(tree.toJSON()).toMatchSnapshot();
});
