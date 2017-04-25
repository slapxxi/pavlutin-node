import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import Icon from 'react-fontawesome';
import Tags from './Tags';
import { toHumanReadableDate } from '../utils';

function PostPreview({ post, activeTag }) {
  const URL = `/blog/${post.slug}`;
  return (
    <div className="preview">
      <header className="preview__header">
        <h2 className="preview__title">
          <Link
            to={URL}
            title={`Read ${post.title}`}
          >
            {post.title}
          </Link>
        </h2>
        <div className="preview__meta">
          <Icon name="clock-o" /> {' '}
          {toHumanReadableDate(post.createdAt)}
        </div>
        <Tags
          activeTag={activeTag}
          tags={post.tags}
          className="preview__tags"
        />
      </header>
      <div className="preview__description">
        <Markdown source={post.description || "There's no description."} />
      </div>
      <div className="preview__button">
        <Link to={URL}>
          Keep Reading
        </Link>
      </div>
    </div>
  );
}

export default PostPreview;
