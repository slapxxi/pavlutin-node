import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Heading from '../../src/js/components/Heading';

describe('<Heading/>', () => {
  it('renders heading matching level', () => {
    const levels = [1, 2, 3, 4, 5, 6];
    levels.forEach((l) => {
      const result = shallow(<Heading level={l} />);
      expect(result.html()).to.eq(`<h${l}></h${l}>`);
    });
  });

  it('generates heading id based on content', () => {
    const result = shallow(<Heading level={1}>Test It</Heading>);
    expect(result.prop('id')).to.eq('#test-it');
  });

  it('generates link to generated id', () => {
    const result = shallow(<Heading level={5}>Test It</Heading>);
    expect(result.find('a').prop('href')).to.eq('#test-it');
  });
});
