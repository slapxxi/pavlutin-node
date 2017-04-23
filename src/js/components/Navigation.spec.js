import React from 'react';
import { shallow, mount } from 'enzyme';
import Navigation from './Navigation';

it('renders children as nav items', () => {
  const nav = (
    <Navigation>
      <em>First</em>
    </Navigation>
  );
  const wrapper = mount(nav);
  expect(wrapper.find('.nav__item').length).toBe(1);
});

it('does not render if there are no children', () => {
  const wrapper = shallow(<Navigation />);
  expect(wrapper.html()).toBe('');
});
