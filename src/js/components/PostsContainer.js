import { find } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import Search from './Search';

function PostsContainer({ posts, searchTerm, tag }) {
  const postsByTag = filterByTag(posts, tag);
  return (
    <div>
      <Search />
      <Posts posts={filterPosts(postsByTag, searchTerm)} tag={tag} />
    </div>
  );
}

function filterByTag(posts, tag) {
  return !tag ? posts : posts.filter(p => p.tags.includes(tag));
}

function filterPosts(posts, searchTerm) {
  return searchPosts(posts, searchTerm);
}

function searchPosts(posts, searchTerm) {
  if (searchTerm === '') {
    return posts;
  }
  const terms = searchTerm
    .trim()
    .split(' ')
    .filter(t => t.length >= 3)
    .map(term => new RegExp(term, 'i'));
  return posts.filter((post) => {
    const description = post.description || '';
    return !!find(terms, term => post.title.match(term) || description.match(term));
  });
}

function mapStateToProps({ posts, searchTerm }) {
  return { posts, searchTerm };
}

export default connect(mapStateToProps)(PostsContainer);
