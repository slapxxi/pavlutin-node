import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import Posts from './Posts';
import PostPreview from './PostPreview';

const posts = [
  { id: 0, title: 'First Post', tags: ['js'] },
  { id: 1, title: 'Second Post' },
];

it('renders', () => {
  const wrapper = shallow(<Posts posts={posts} />);
  expect(wrapper.length).toBe(1);
});

it('renders list of posts', () => {
  const result = shallow(<Posts posts={posts} />);
  expect(result.find(PostPreview).length).toBe(2);
});

it('passes tag to <PostPreview>', () => {
  const result = mount(
    <Router><Posts tag="js" posts={posts} /></Router>,
  );
  expect(result.contains(
    <PostPreview activeTag="js" post={posts[0]} />,
  )).toBe(true);
});

it('renders message when there are no posts', () => {
  const result = shallow(<Posts posts={[]} />);
  expect(result.contains(<p>No posts found.</p>)).toBe(true);
});
