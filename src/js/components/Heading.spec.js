import React from 'react';
import render from 'react-test-renderer';
import { shallow } from 'enzyme';
import Heading from './Heading';

it('renders heading with level 1', () => {
  const tree = render.create(<Heading level={1} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders heading with level 2', () => {
  const tree = render.create(<Heading level={2} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders heading with level 3', () => {
  const tree = render.create(<Heading level={3} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders heading with level 4', () => {
  const tree = render.create(<Heading level={4} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders heading with level 5', () => {
  const tree = render.create(<Heading level={5} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders heading with level 6', () => {
  const tree = render.create(<Heading level={6} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('generates heading id based on content', () => {
  const wrapper = shallow(<Heading level={1}>Test It</Heading>);
  expect(wrapper.prop('id')).toBe('#test-it');
});

it('generates link to generated id', () => {
  const wrapper = shallow(<Heading level={5}>Test It</Heading>);
  expect(wrapper.find('a').prop('href')).toBe('#test-it');
});
