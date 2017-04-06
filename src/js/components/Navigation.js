import React, { Children } from 'react';
import { requireChildren, withClassName } from './HOC';

function Navigation({ children, className }) {
  return (
    <nav className={className}>
      <ul>
        {Children.map(children, child => <li className="nav__item">{child}</li>)}
      </ul>
    </nav>
  );
}

export default withClassName('nav')(requireChildren(Navigation));
