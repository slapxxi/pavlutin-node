import React from 'react';
import { connect } from 'react-redux';
import DisqusThread from 'react-disqus-thread';
import Post from './Post';
import PageNotFound from './PageNotFound';
import Spinner from './Spinner';
import { postBySlug } from '../store/selectors/posts';
import { setTitle } from '../utils';

function PostPage({ post, isFetching, match }) {
  if (isFetching) {
    return <Spinner />;
  }
  if (!post) {
    return <PageNotFound />;
  }
  setTitle(post.title);
  return (
    <section className="postpage">
      <Post post={post} />
      <DisqusThread
        identifier={`${post.slug}-${post.id}`}
        title={post.title}
        url={`http://www.slavapavlutin.com${match.url}`}
        category_id="1"
        shortname="slavapavlutin-com"
      />
    </section>
  );
}

function mapStateToProps(state, props) {
  return {
    post: postBySlug(state, props),
    isFetching: state.posts.isFetching,
  };
}

export default connect(mapStateToProps)(PostPage);
