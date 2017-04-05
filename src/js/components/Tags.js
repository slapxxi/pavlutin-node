import React from 'react';
import { Link } from 'react-router-dom';
import { withClassName } from './HOC';

function Tags({ tags, className }) {
  if (!tags) {
    return null;
  }
  return (
    <ul className={className}>
      {
        tags.map(t =>
          <li key={t} className="tags__tag">
            <Link to={`/tag/${t}`}>{t}</Link>
          </li>,
        )
      }
    </ul>
  );
}

export default withClassName('tags')(Tags);
