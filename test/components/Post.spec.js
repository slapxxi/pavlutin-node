import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';
import Post from '../../src/js/components/Post';
import { singleLine } from '../test-helper';

describe('<Post/>', () => {
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
    expect(result.find('.post__title').text()).to.eq('Test Post');
  });

  it('renders post content', () => {
    const result = mount(<Post post={post} />);
    expect(result.find('.post__content').text()).to.eq('content');
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
    expect(result.find('.post__content').html()).to.eq(expected);
  });

  it('renders post metadata', () => {
    const result = mount(<Post post={post} />);
    expect(result.find('.post__meta').text()).to.eq('  a few seconds ago');
  });

  it('renders post image', () => {
    const postWithImage = { ...post, img: 'image.png' };
    const result = shallow(<Post post={postWithImage} />);
    expect(result.find('.post__image').length).to.eq(1);
  });

  it('renders no image if missing', () => {
    const result = mount(<Post post={post} />);
    expect(result.find('.post__image').length).to.eq(0);
  });
});
