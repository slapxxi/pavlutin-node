import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import { PostPreview } from '../../src/js/components/Post';


describe('<PostPreview/>', () => {
  const post = {
    id: 0,
    title: 'Test Post',
    content: 'empty',
    description: 'empty',
    author: 'bot',
    slug: 'test-post',
    tags: ['test', 'react'],
  };

  it('renders tags', () => {
    const result = mount(<PostPreview post={post} />);
    expect(result.find('.tags__tag').length).to.eq(2);
  });
});
