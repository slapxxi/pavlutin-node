import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Title from '../../src/js/components/Title';
import { singleLine } from '../test-helper';

describe('<Title>', () => {
  it('renders heading when has one child', () => {
    const result = shallow(<Title>Hello</Title>);
    expect(result.html()).to.eq('<h1 class="title">Hello</h1>');
  });

  it('accepts className', () => {
    const result = shallow(<Title className="test">Hello</Title>);
    expect(result.html()).to.eq('<h1 class="title test">Hello</h1>');
  });

  it('renders <hgroup> when has multiple children', () => {
    const result = shallow(
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
    expect(result.html()).to.eq(expected);
  });
});
