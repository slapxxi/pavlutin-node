import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withPageTitle } from '../components/HOC';
import { fetchPosts } from '../store/posts/actions';
import { searchPosts } from '../store/posts/selectors';
import Search from './Search';
import PostPage from '../components/PostPage';
import TagPage from '../components/TagPage';
import Posts from '../components/Posts';
import Spinner from '../components/Spinner';

class BlogPage extends React.Component {
  constructor() {
    super();
    this.renderBlogPage = this.renderBlogPage.bind(this);
  }

  componentDidMount() {
    if (this.props.lastUpdated === 0) {
      this.props.fetchPosts();
    }
  }

  renderBlogPage() {
    const { posts, isFetching } = this.props;
    return (
      <div className="blogpage">
        <h1>Blog</h1>
        <Search />
        {
          isFetching ?
            <div className="blogpage__spinner">
              <Spinner />
            </div>
            :
            <Posts posts={posts} />
        }
      </div>
    );
  }

  render() {
    const { url } = this.props.match;
    return (
      <div className="page">
        <Route exact path={`${url}`} render={this.renderBlogPage} />
        <Route exact path={`${url}/:slug`} component={PostPage} />
        <Route exact path={`${url}/tag/:tag`} component={TagPage} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: searchPosts(state),
    lastUpdated: state.posts.lastUpdated,
    isFetching: state.posts.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts() {
      dispatch(fetchPosts());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withPageTitle('Blog')(BlogPage),
);
