import { expect } from 'chai';
import postsReducer from '../../src/js/reducers/posts-reducer';
import {
  addPost,
  requestPosts,
  receivePosts,
} from '../../src/js/actions';

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

  it('receives posts', () => {
    const result = postsReducer(
      undefined,
      receivePosts({ posts: [post] }),
    );
    expect(result.items).not.to.be.empty;
    expect(result.isFetching).to.eq(false);
    expect(result.lastUpdated).not.to.eq(0);
  });

  it('requests posts', () => {
    const result = postsReducer({ items: [] }, requestPosts());
    expect(result.lastUpdated).not.to.eq(0);
  });
});
