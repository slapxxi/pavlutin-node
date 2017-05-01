import React from 'react';
import render from 'react-test-renderer';
import ExternalLink from './ExternalLink';

it('renders link to an external resource', () => {
  const tree = render.create(
    <ExternalLink href="https://poogle.com">Poogle</ExternalLink>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
