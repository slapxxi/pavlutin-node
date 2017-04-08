import React from 'react';
import { setTitle } from '../utils';

function PageNotFound() {
  setTitle('Page Not Found');
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

export default PageNotFound;
