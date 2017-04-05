import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import Icon from 'react-fontawesome';
import Tags from './Tags';
import { toHumanReadableDate } from '../utils';

function PostPreview({ post }) {
  const URL = `/blog/${post.slug}`;
  return (
    <div className="post post_preview">
      <h2 className="post__title">
        <Link
          to={URL}
          title={`Read ${post.title}`}
        >
          {post.title}
        </Link>
      </h2>
      <div className="post__meta">
        <Icon name="clock-o" /> {' '}
        {toHumanReadableDate(post.createdAt)}
      </div>
      <Tags tags={post.tags} className="post__tags" />
      <div className="post__description">
        <Markdown source={post.description || "There's no description."} />
      </div>
      <div>
        <Link className="button" to={URL}>
          Keep Reading
        </Link>
      </div>
    </div>
  );
}

export default PostPreview;
