import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import PostContainer from './PostContainer';
import ProjectsPage from './ProjectsPage';
import Footer from './Footer';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Header className="app__header" />
        <div className="app__content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/blog/:slug" component={PostContainer} />
            <Route exact path="/tag/:tag" component={BlogPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer className="app__footer" />
      </div>
    </Router>
  );
}

export default App;
