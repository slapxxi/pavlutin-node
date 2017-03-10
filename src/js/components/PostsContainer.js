import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import Posts from './Posts';
import Search from './Search';


function PostsContainer({ posts, searchTerm }) {
  return (
    <div>
      <Search />
      <Posts posts={filterPosts(posts, searchTerm)} />
    </div>
  );
}

function filterPosts(posts, searchTerm) {
  return searchPosts(posts, searchTerm);
}

function searchPosts(posts, searchTerm) {
  if (searchTerm === '') {
    return posts;
  }
  const terms = searchTerm.trim().split(' ').map(term => new RegExp(term, 'i'));
  return posts.filter((post) => {
    const description = post.description || '';
    const tags = post.tags || [];
    return !!_.find(terms, term => post.title.match(term) || description.match(term) || _.find(tags, t => t.match(term)));
  });
}

function sortPosts(posts, field) {
  switch (field) {
    case 'date': return _.sortBy(posts, p => p.createdAt).reverse();
    case 'title': return _.sortBy(posts, p => p.title);
    case 'author': return _.sortBy(posts, p => p.author);
    default: return posts;
  }
}

function mapStateToProps({ posts, searchTerm }) {
  return { posts, searchTerm };
}

export default connect(mapStateToProps)(PostsContainer);
