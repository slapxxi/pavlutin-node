import React from 'react';
import Transition from 'react-transition-group/CSSTransitionGroup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import Footer from './Footer';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Header className="app__header" />
        <div className="app__content">
          <Route
            render={({ location }) => (
              <Transition
                transitionName="fade"
                transitionEnterTimeout={250}
                transitionLeave={false}
              >
                <Switch key={location.pathname}>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/blog" component={BlogPage} />
                  <Route
                    exact path="/blog/:slug"
                    component={BlogPage}
                  />
                  <Route exact path="/tag/:tag" component={BlogPage} />
                  <Route path="/projects" component={ProjectsPage} />
                  <Route path="/about" component={AboutPage} />
                  <Route location={location} component={PageNotFound} />
                </Switch>
              </Transition>
            )}
          />
        </div>
        <Footer className="app__footer" />
      </div>
    </Router>
  );
}

export default App;
