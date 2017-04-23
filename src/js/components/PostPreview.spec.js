import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router, Link } from 'react-router-dom';
import PostPreview from './PostPreview';
import Tags from './Tags';

const post = {
  id: 0,
  title: 'Test Post',
  content: 'empty',
  description: 'empty',
  author: 'bot',
  slug: 'test-post',
  tags: ['test', 'react'],
};

const wrapper = mount(
  <Router>
    <PostPreview post={post} />
  </Router>,
);

it('renders tags', () => {
  const tags = <Tags activeTag={undefined} tags={post.tags} className="post__tags" />;
  expect(wrapper.contains(tags)).toBe(true);
});

it('renders link to the post', () => {
  const link = (
    <Link className="button" to="/blog/test-post">
      Keep Reading
    </Link>
  );
  expect(wrapper.contains(link)).toBe(true);
});
