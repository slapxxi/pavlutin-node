import React from 'react';
import render from 'react-test-renderer';
import Title from './Title';

it('renders heading', () => {
  const tree = render.create(<Title>Test</Title>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders group of headings', () => {
  const tree = render.create(
    <Title>
      <h1>Hello</h1>
      <h2>World</h2>
    </Title>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it('accepts class name', () => {
  const tree = render.create(<Title className="test">Test</Title>);
  expect(tree.toJSON()).toMatchSnapshot();
});
