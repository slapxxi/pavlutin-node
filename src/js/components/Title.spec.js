import React from 'react';
import render from 'react-test-renderer';
import { shallow } from 'enzyme';
import Title from './Title';
import { singleLine } from '../../../test/test-helper';

it('renders', () => {
  const wrapper = shallow(<Title />);
  expect(wrapper.length).toBe(1);
});

it('matches snapshot', () => {
  const tree = render.create(<Title />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders heading when has one child', () => {
  const wrapper = shallow(<Title>Hello</Title>);
  expect(wrapper.html()).toBe('<h1 class="title">Hello</h1>');
});

it('accepts className', () => {
  const wrapper = shallow(<Title className="test">Hello</Title>);
  expect(wrapper.html()).toBe('<h1 class="title test">Hello</h1>');
});

it('renders <hgroup> when has multiple children', () => {
  const wrapper = shallow(
    <Title>
      <h1>Hello</h1>
      <h2>World</h2>
    </Title>,
  );
  const expected = singleLine`
    <hgroup class="title">
      <h1 class="title__main">Hello</h1>
      <h2 class="title__secondary">World</h2>
    </hgroup>
  `;
  expect(wrapper.html()).toBe(expected);
});
