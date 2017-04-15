import { expect } from 'chai';
import postsReducer from '../../src/js/reducers/posts-reducer';
import { addPost } from '../../src/js/actions';

describe('postsReducer', () => {
  const post = { title: 'A first post' };

  it('returns initial state', () => {
    const result = postsReducer(undefined, {});
    expect(result).to.eql({
      isFetching: false,
      lastUpdated: 0,
      items: [],
    });
  });

  it('adds post', () => {
    const result = postsReducer({ items: [] }, addPost(post));
    expect(result.items).to.include(post);
  });

  it('updates lastTimeUpdate when adding post', () => {
    const result = postsReducer({ items: [] }, addPost(post));
    expect(result.lastUpdated).not.to.eq(0);
  });
});
