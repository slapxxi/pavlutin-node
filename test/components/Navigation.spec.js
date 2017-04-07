/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Navigation from '../../src/js/components/Navigation';

describe('<Navigation/>', () => {
  it('renders children as nav items', () => {
    const nav = (
      <Navigation>
        <em>First</em>
      </Navigation>
    );
    const result = mount(nav);
    expect(result.find('.nav__item').length).to.eq(1);
  });

  it('does not render if there are no children', () => {
    const result = shallow(<Navigation />);
    expect(result.html()).to.eq('');
  });
});
