import { find } from 'lodash';
import { createSelector } from 'reselect';

function postsItems(state) {
  return state.posts.items;
}

function searchTerm(state) {
  return state.searchTerm;
}

function postsByTag(state, props) {
  return filterByTag(state.posts.items, props.match.params.tag);
}

function postBySlug(state, props) {
  return findPost(state.posts.items, props.match.params.slug);
}

function filterByTag(posts, tag) {
  return !tag ? posts : posts.filter(p => p.tags.includes(tag));
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

function findPost(posts, slug) {
  return find(posts, p => p.slug === slug);
}

const searchPosts = createSelector(
  [postsItems, searchTerm],
  search,
);

const searchPostsWithTag = createSelector(
  [postsByTag, searchTerm],
  search,
);

export { searchPosts, searchPostsWithTag, postBySlug };
