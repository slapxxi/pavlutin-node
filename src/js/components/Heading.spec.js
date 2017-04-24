import React from 'react';
import render from 'react-test-renderer';
import { shallow } from 'enzyme';
import Heading from './Heading';

const levels = [1, 2, 3, 4, 5, 6];

it('renders', () => {
  const wrapper = shallow(<Heading />);
  expect(wrapper.length).toBe(1);
});

it('matches snapshot', () => {
  const tree = render.create(<Heading />).toJSON();
  expect(tree).toMatchSnapshot();
});

levels.forEach((l) => {
  it(`renders heading with level ${l}`, () => {
    const wrapper = shallow(<Heading level={l} />);
    expect(wrapper.html()).toBe(`<h${l}></h${l}>`);
  });
});

it('generates heading id based on content', () => {
  const wrapper = shallow(<Heading level={1}>Test It</Heading>);
  expect(wrapper.prop('id')).toBe('#test-it');
});

it('generates link to generated id', () => {
  const wrapper = shallow(<Heading level={5}>Test It</Heading>);
  expect(wrapper.find('a').prop('href')).toBe('#test-it');
});
