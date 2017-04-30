// @flow
import { find } from 'lodash';
import { createSelector } from 'reselect';
import type { State, Post } from '../flow-types';

function postsItems(state: State) {
  return state.posts.items;
}

function searchTerm(state: State) {
  return state.searchTerm;
}

function postsByTag(state: State, props: Object): Array<Post> {
  return filterByTag(state.posts.items, props.match.params.tag);
}

function postBySlug(state: State, props: Object): Post {
  return findPost(state.posts.items, props.match.params.slug);
}

function filterByTag(posts: Array<Post>, tag: string): Array<Post> {
  return !tag ? posts : posts.filter(p => p.tags.includes(tag));
}

function search(posts: Array<Post>, searchTerm: string): Array<Post> {
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

function findPost(posts: Array<Post>, slug: string) {
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
