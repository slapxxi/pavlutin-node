import React from 'react';
import render from 'react-test-renderer';
import { shallow } from 'enzyme';
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

it('renders post', () => {
  const tree = render.create(<Post post={post} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders post image', () => {
  const postWithImage = { ...post, img: 'test.png' };
  const tree = render.create(<Post post={postWithImage} />);
  expect(tree.toJSON()).toMatchSnapshot();
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
