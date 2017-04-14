import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Spinner from '../../src/js/components/Spinner';

describe('<Spinner>', () => {
  it('has .spinner class', () => {
    const result = shallow(<Spinner />);
    expect(result.find('.spinner').length).to.eq(1);
  });

  it('displays loading text', () => {
    const result = shallow(<Spinner />);
    expect(result.find('.spinner').text()).to.eq('Loading...');
  });
});
