import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

const levels = [1, 2, 3, 4, 5, 6];

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
