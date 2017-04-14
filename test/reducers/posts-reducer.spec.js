import { expect } from 'chai';
import postsReducer from '../../src/js/reducers/posts-reducer';
import { addPost } from '../../src/js/actions';

describe('postsReducer', () => {
  const post = { title: 'A first post' };

  it('returns initial state', () => {
    const result = postsReducer(undefined, { type: '' });
    expect(result).to.be.an('array');
    expect(result.length).to.eq(0);
  });

  it('can add posts', () => {
    const result = postsReducer([], addPost(post));
    expect(result.length).to.eq(1);
    expect(result).to.include(post);
  });
});
