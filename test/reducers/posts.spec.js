import { expect } from 'chai';
import posts from '../../src/js/store/reducers/posts';
import {
  addPost,
  requestPosts,
  receivePosts,
} from '../../src/js/store/actions/posts';

describe('posts reducer', () => {
  const post = { title: 'A first post' };

  it('returns initial state', () => {
    const result = posts(undefined, {});
    expect(result).to.eql({
      isFetching: false,
      lastUpdated: 0,
      items: [],
    });
  });

  it('adds post', () => {
    const result = posts({ items: [] }, addPost(post));
    expect(result.items).to.include(post);
  });

  it('receives posts', () => {
    const result = posts(
      undefined,
      receivePosts({ posts: [post] }),
    );
    expect(result.items).not.to.be.empty;
    expect(result.isFetching).to.eq(false);
    expect(result.lastUpdated).not.to.eq(0);
  });

  it('requests posts', () => {
    const result = posts({ items: [] }, requestPosts());
    expect(result.lastUpdated).not.to.eq(0);
  });
});
