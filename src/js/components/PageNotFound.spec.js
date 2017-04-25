import React from 'react';
import render from 'react-test-renderer';
import PageNotFound from './PageNotFound';

it('renders Not Found page', () => {
  const tree = render.create(<PageNotFound />);
  expect(tree.toJSON()).toMatchSnapshot();
});
