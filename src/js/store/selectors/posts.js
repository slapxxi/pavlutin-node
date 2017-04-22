import { find } from 'lodash';
import { createSelector } from 'reselect';

function postsItems(state) {
  return state.posts.items;
}

function searchTerm(state) {
  return state.searchTerm;
}

function search(posts, searchTerm) {
  if (searchTerm.trim() === '') {
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

const searchPosts = createSelector(
  [postsItems, searchTerm],
  search,
);

export { searchPosts };
