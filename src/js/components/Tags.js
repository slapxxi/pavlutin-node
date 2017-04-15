import React from 'react';
import { Link } from 'react-router-dom';
import { withClassName } from './HOC';

function Tags({ tags, activeTag, className }) {
  if (!tags) {
    return null;
  }
  return (
    <ul className={className}>
      {
        tags.map((t) => {
          if (activeTag === t) {
            return (
              <li key={t} className="tags__tag tags__tag_active">
                <Link to="/blog/">{t}</Link>
              </li>
            );
          }
          return (
            <li key={t} className="tags__tag">
              <Link to={`/blog/tag/${t}`}>{t}</Link>
            </li>
          );
        })
      }
    </ul>
  );
}

export default withClassName('tags')(Tags);
