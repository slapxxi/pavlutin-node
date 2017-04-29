import React from 'react';
import { connect } from 'react-redux';
import { searchPostsWithTag } from '../store/posts/selectors';
import Posts from './Posts';
import Spinner from './Spinner';
import Search from '../containers/Search';
import { withPageTitle } from './HOC';

function TagPage(props) {
  const { posts, isFetching, match } = props;
  const { tag } = match.params;
  const title = generateTitle(props);
  return (
    <div className="blogpage">
      <h1>{title}</h1>
      <div>
        <Search />
        {isFetching ? <Spinner /> : <Posts posts={posts} tag={tag} />}
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    posts: searchPostsWithTag(state, props),
    isFetching: state.posts.isFetching,
  };
}

function generateTitle(props) {
  return `Tag "${props.match.params.tag}"`;
}

export default connect(mapStateToProps)(
  withPageTitle(generateTitle)(TagPage),
);
