import React from 'react';
import { Link } from 'react-router-dom';
import { withClassName } from './HOC';

function Tags({ tags, activeTag, className }) {
  if (!tags) {
    return null;
  }
  return (
    <ul className={className}>
      {tags.map(mapTagToListItem(activeTag))}
    </ul>
  );
}

function mapTagToListItem(activeTag) {
  return function mapTagWithActiveTag(tag) {
    if (activeTag === tag) {
      return renderActiveTag(tag);
    }
    return renderTag(tag);
  };
}

function renderActiveTag(tag) {
  return (
    <li key={tag} className="tags__tag tags__tag_active">
      <Link to="/blog/">{tag}</Link>
    </li>
  );
}

function renderTag(tag) {
  return (
    <li key={tag} className="tags__tag">
      <Link to={`/blog/tag/${tag}`}>{tag}</Link>
    </li>
  );
}

export default withClassName('tags')(Tags);
