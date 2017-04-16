import React from 'react';
import Posts from './Posts';
import Spinner from './Spinner';
import Search from '../containers/Search';
import { setTitle } from '../utils';

function TagPage({ posts, tag, isFetching }) {
  if (isFetching) {
    return <Spinner />;
  }
  const title = `Tag "${tag}"`;
  const postsByTag = filterByTag(posts, tag);
  setTitle(title);
  return (
    <div className="blogpage">
      <h1>{title}</h1>
      <div>
        <Search />
        {isFetching ? <Spinner /> : <Posts posts={postsByTag} tag={tag} />}
      </div>
    </div>
  );
}

function filterByTag(posts, tag) {
  return !tag ? posts : posts.filter(p => p.tags.includes(tag));
}

export default TagPage;
