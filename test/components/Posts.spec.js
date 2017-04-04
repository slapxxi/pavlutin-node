import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Posts from '../../src/js/components/Posts';

describe('<Posts/>', () => {
  const posts = [
    { id: 0, title: 'First Post' },
    { id: 1, title: 'Second Post' },
  ];

  it('renders list of posts', () => {
    const result = shallow(<Posts posts={posts} />);
    expect(result.find('li').length).to.eq(2);
  });

  it('renders message when there are no posts', () => {
    const result = shallow(<Posts posts={[]} />);
    expect(result.first('p').text()).to.eq('No posts found.');
  });
});
