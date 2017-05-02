import React from 'react';
import render from 'react-test-renderer';
import Footer from './Footer';

it('renders site footer', () => {
  const tree = render.create(<Footer />);
  expect(tree.toJSON()).toMatchSnapshot();
});
