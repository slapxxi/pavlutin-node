import React from 'react';
import Icon from 'react-fontawesome';
import Markdown from 'react-markdown';
import DisqusThread from 'react-disqus-thread';
import { Link } from 'react-router-dom';
import Tags from './Tags';
import { toHumanReadableDate } from '../utils';

function Post({ post }) {
  const URL = `http://slavapavlutin.com/blog/${post.slug}`;
  return (
    <article className="post">
      { renderTitle(post) }
      { renderMeta(post) }

      { post.img ? (
        <div className="post__image">
          <img src={`/img/${post.img}`} alt={`${post.title}`} />
        </div>
        ) : null
      }

      { renderDescription(post.description) }
      { renderContent(post.content) }

      <DisqusThread
        identifier={post.slug + post.id}
        title={post.title}
        url={URL}
        category_id={post.id}
        // shortname="slavapavlutin-com"
      />
    </article>
  );
}

function PostPreview({ post }) {
  return (
    <div className="post post_preview">
      { renderTitle(post) }
      { renderMeta(post) }
      <Tags tags={post.tags} className="post__tags" />
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
      <Icon name="clock-o" /> {' '}
      { toHumanReadableDate(post.createdAt) }
    </div>
  );
}

function renderDescription(description = 'There is no description.') {
  return <div className="post__description"><Markdown source={description} /></div>;
}

function renderContent(content) {
  return (
    <div className="post__content">
      <Markdown source={content.replace(/\\n/g, '\n')} />
    </div>
  );
}

function renderButton(slug) {
  return (
    <div>
      <Link className="button" to={`/blog/${slug}`}>
        Keep Reading
      </Link>
    </div>
  );
}

export { Post, PostPreview };
export default Post;
