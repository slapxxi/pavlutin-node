import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

it('has .spinner class', () => {
  const wrapper = shallow(<Spinner />);
  expect(wrapper.find('.spinner').length).toBe(1);
});

it('displays loading text', () => {
  const wrapper = shallow(<Spinner />);
  expect(wrapper.find('.spinner').text()).toBe('Loading...');
});
