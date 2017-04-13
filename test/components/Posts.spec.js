import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Posts from '../../src/js/components/Posts';
import PostPreview from '../../src/js/components/PostPreview';

describe('<Posts/>', () => {
  const posts = [
    { id: 0, title: 'First Post', tags: ['js'] },
    { id: 1, title: 'Second Post' },
  ];

  it('renders list of posts', () => {
    const result = shallow(<Posts posts={posts} />);
    expect(result.find(PostPreview).length).to.eq(2);
  });

  it('passes tag to <PostPreview>', () => {
    const result = mount(
      <Router><Posts tag="js" posts={posts} /></Router>,
    );
    expect(result.contains(
      <PostPreview activeTag="js" post={posts[0]} />,
    )).to.eq(true);
  });

  it('renders message when there are no posts', () => {
    const result = shallow(<Posts posts={[]} />);
    expect(result.contains(<p>No posts found.</p>)).to.eq(true);
  });
});
