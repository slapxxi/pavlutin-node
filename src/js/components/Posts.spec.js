import React from 'react';
import render from 'react-test-renderer';
import { shallow } from 'enzyme';
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

it('matches snapshot', () => {
  const tree = render.create(
    <Router><Posts posts={posts} /></Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders list of posts', () => {
  const result = shallow(<Posts posts={posts} />);
  expect(result.find(PostPreview).length).toBe(2);
});

it('renders message when there are no posts', () => {
  const result = shallow(<Posts posts={[]} />);
  expect(result.contains(<p>No posts found.</p>)).toBe(true);
});
