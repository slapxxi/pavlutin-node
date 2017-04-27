import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, TagsList } from './Tags.styled';

function Tags({ tags, activeTag, className }) {
  if (!tags) {
    return null;
  }
  return (
    <TagsList className={className}>
      {
        tags.map((tag) => {
          const active = activeTag === tag;
          return (
            <Tag key={tag} active={active}>
              <Link to={active ? '/blog' : `/blog/tag/${tag}`}>{tag}</Link>
            </Tag>
          );
        })
      }
    </TagsList>
  );
}

export default Tags;
