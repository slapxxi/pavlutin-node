import React from 'react';
import { mount, shallow } from 'enzyme';
import Post from './Post';
import { singleLine } from '../../../test/test-helper';

const post = {
  id: 0,
  title: 'Test Post',
  content: '**content**',
  description: 'empty',
  author: 'bot',
  slug: 'test-post',
  tags: ['test', 'react'],
};

it('renders post title', () => {
  const result = shallow(<Post post={post} />);
  expect(result.find('.post__title').text()).toBe('Test Post');
});

it('renders post content', () => {
  const result = mount(<Post post={post} />);
  expect(result.find('.post__content').text()).toBe('content');
});

it('converts post content from Markdown', () => {
  const result = shallow(<Post post={post} />);
  const expected = singleLine`
    <div class="post__content">
      <div>
        <p><strong>content</strong></p>
      </div>
    </div>
  `;
  expect(result.find('.post__content').html()).toBe(expected);
});

it('renders post metadata', () => {
  const result = mount(<Post post={post} />);
  expect(result.find('.post__meta').text()).toBe('  a few seconds ago');
});

it('renders post image', () => {
  const postWithImage = { ...post, img: 'imagetoBepng' };
  const result = shallow(<Post post={postWithImage} />);
  expect(result.find('.post__image').length).toBe(1);
});

it('renders no image if missing', () => {
  const result = mount(<Post post={post} />);
  expect(result.find('.post__image').length).toBe(0);
});
