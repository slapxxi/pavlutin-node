import React from 'react';
import Icon from 'react-fontawesome';
import Markdown from 'react-markdown';
import DisqusThread from 'react-disqus-thread';
import CodeBlock from './CodeBlock';
import Heading from './Heading';
import { toHumanReadableDate } from '../utils';

function Post({ post }) {
  const URL = `http://slavapavlutin.com/blog/${post.slug}`;
  const content = post.content.replace(/\\n/g, '\n');
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
        <Markdown source={content} renderers={{ CodeBlock, Heading }} />
      </div>
      <DisqusThread
        identifier={post.slug + post.id}
        title={post.title}
        url={URL}
        category_id={post.id.toString()}
        shortname="slavapavlutin-com"
      />
    </article>
  );
}

export default Post;
