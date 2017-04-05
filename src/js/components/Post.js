import React from 'react';
import Icon from 'react-fontawesome';
import Markdown from 'react-markdown';
import DisqusThread from 'react-disqus-thread';
import { toHumanReadableDate } from '../utils';

function Post({ post }) {
  const URL = `http://slavapavlutin.com/blog/${post.slug}`;
  return (
    <article className="post">
      <h1 className="post__title">{post.title}</h1>
      <div className="post__meta">
        <Icon name="clock-o" /> {' '}
        {toHumanReadableDate(post.createdAt)}
      </div>
      { post.img ? (
        <div className="post__image">
          <img src={`/img/${post.img}`} alt={`${post.title}`} />
        </div>
        ) : null
      }
      <div className="post__description">
        <Markdown source={post.description || ''} />
      </div>
      <div className="post__content">
        <Markdown source={post.content.replace(/\\n/g, '\n')} />
      </div>
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

export default Post;
