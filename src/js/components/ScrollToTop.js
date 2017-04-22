import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const { hash } = this.props.location;
    if (hash.length > 0) {
      document.getElementById(hash).scrollIntoView();
      return;
    }
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
