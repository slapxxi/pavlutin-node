import { find } from 'lodash';
import React from 'react';
import Post from './Post';
import PageNotFound from './PageNotFound';
import Spinner from './Spinner';
import { setTitle } from '../utils';

function PostPage({ posts, slug, isFetching }) {
  if (isFetching) {
    return <Spinner />;
  }
  const post = find(posts, p => p.slug === slug);
  if (!post) {
    return <PageNotFound />;
  }
  setTitle(post.title);
  return (
    <section className="postpage">
      <Post post={post} />
    </section>
  );
}

export default PostPage;
