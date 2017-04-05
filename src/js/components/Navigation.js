import React, { Children } from 'react';
import { requireChildren } from './HOC';
import { combineClassNames } from '../utils';


function Navigation({ children, className }) {
  const clsName = combineClassNames(className, 'nav');
  return (
    <nav className={clsName}>
      <ul>
        {Children.map(children, child => <li className="nav__item">{child}</li>)}
      </ul>
    </nav>
  );
}

export default requireChildren(Navigation);
