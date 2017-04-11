import React from 'react';
import Icon from 'react-fontawesome';
import { setTitle } from '../utils';

function PageNotFound() {
  setTitle('Page Not Found');
  return (
    <div className="container page-not-found">
      <h1><Icon name="exclamation-triangle" /> 404 - Page Not Found</h1>
    </div>
  );
}

export default PageNotFound;
