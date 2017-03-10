import moment from 'moment';
import React from 'react';
import { Link } from 'react-router';
import { lorem } from '../../../lib/helpers';


function Post({ post }) {
  return (
    <div className="post">
      { renderTitle(post) }
      { renderMeta(post) }
      { renderDescription(post.description) }
      { renderContent(post.content) }
    </div>
  );
}

function PostPreview({ post }) {
  return (
    <div className="post post_preview">
      { renderTitle(post) }
      { renderMeta(post) }
      { renderTags(post) }
      { renderDescription(post.description) }
      { renderButton(post.slug) }
    </div>
  );
}

function renderTitle({ title, slug }) {
  return (
    <h2 className="post__title">
      <Link to={`/blog/${slug}`} title={`Read '${title}'`}>{ title }</Link>
    </h2>
  );
}

function renderMeta(post) {
  return (
    <div className="post__meta">
      { toHumanReadableDate(post.createdAt) }
    </div>
  );
}

function renderDescription(description = 'There is no description.') {
  return <p className="post__description">{ description }</p>;
}

function renderContent(content) {
  return (
    <div className="post__content">
      { lorem(3).map(text => <p>{text}</p>)}
    </div>
  );
}

function renderTags({ tags }) {
  if (!tags) {
    return null;
  }
  return (
    <div className="post__tags">
      <ul className="tags">
        { tags.map(t => <li className="tags__tag"><Link to={`/blog/tag/${t}`}>{t}</Link></li>) }
      </ul>
    </div>
  );
}

function renderButton(slug) {
  return (
    <p>
      <Link className="button" to={`/blog/${slug}`}>Keep Reading</Link>
    </p>
  );
}

function toHumanReadableDate(timestamp) {
  return moment(timestamp).fromNow();
}

export { Post, PostPreview };
export default Post;
