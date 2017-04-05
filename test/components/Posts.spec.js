import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Posts from '../../src/js/components/Posts';
import PostPreview from '../../src/js/components/PostPreview';

describe('<Posts/>', () => {
  const posts = [
    { id: 0, title: 'First Post' },
    { id: 1, title: 'Second Post' },
  ];

  it('renders list of posts', () => {
    const result = shallow(<Posts posts={posts} />);
    expect(result.find(PostPreview).length).to.eq(2);
  });

  it('renders message when there are no posts', () => {
    const result = shallow(<Posts posts={[]} />);
    expect(result.contains(<p>No posts found.</p>)).to.eq(true);
  });
});
