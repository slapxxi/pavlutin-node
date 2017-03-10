// @flow
import React, { Children } from 'react';
import { requireChildren } from './HOC';
import { combineClassNames } from '../utils';


function Navigation({ children, className }: Object) {
  const clsName = combineClassNames(className, 'nav');
  return (
    <nav className={clsName}>
      <ul>
        { Children.map(children, mapChildToListItem) }
      </ul>
    </nav>
  );
}

function mapChildToListItem(child) {
  return <li className="nav__item">{ child }</li>;
}

export default requireChildren(Navigation);
