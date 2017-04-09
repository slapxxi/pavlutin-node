import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import Post from '../../src/js/components/Post';

describe('<Post/>', () => {
  const post = {
    id: 0,
    title: 'Test Post',
    content: 'empty',
    description: 'empty',
    author: 'bot',
    slug: 'test-post',
    tags: ['test', 'react'],
  };

  it('renders post title', () => {
    const result = mount(<Post post={post} />);
    expect(result.find('.post__title').text()).to.eq('Test Post');
  });

  it('renders post metadata', () => {
    const result = mount(<Post post={post} />);
    expect(result.find('.post__meta').text()).to.eq('  a few seconds ago');
  });

  it('renders post image', () => {
    const postWithImage = { ...post, img: 'image.png' };
    const result = mount(<Post post={postWithImage} />);
    expect(result.find('.post__image').length).to.eq(1);
  });

  it('renders no image if missing', () => {
    const result = mount(<Post post={post} />);
    expect(result.find('.post__image').length).to.eq(0);
  });
});
