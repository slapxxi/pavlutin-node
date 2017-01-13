const { expect } = require('chai');
const postsReducer = require('../../src/js/reducers/posts-reducer');
const { addPost, sortPosts } = require('../../src/js/actions');


describe('postsReducer', () => {
  const post = {title: 'A first post'};
  const secondPost = {title: 'The second post'};

  it('returns initial state', () => {
    const result = postsReducer(undefined, {type: ''});
    expect(result).to.be.an('array');
    expect(result).to.have.length(0);
  });

  it('adds posts', () => {
    const result = postsReducer([], addPost(post));
    expect(result).to.include(post);
  });

  it('sorts posts', () => {
    const result = postsReducer([secondPost, post], sortPosts(post => post.title));
    expect(result[0]).to.eq(post);
    expect(result[1]).to.eq(secondPost);
  });
});
