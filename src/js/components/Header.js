import React from 'react';
import { Link } from 'react-router';
import Logo from './Logo';
import Navigation from './Navigation';
import { combineClassNames } from '../utils';


const activeStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  cursor: 'default',
  color: 'black',
};

function Header({ className }) {
  const clsName = combineClassNames(className, 'header');
  return (
    <header className={clsName}>
      <Logo className="header__logo">
        <Link to="/">Slava Pavlutin</Link>
      </Logo>

      <Navigation className="header__nav">
        <Link activeStyle={activeStyle} to="/blog">Blog</Link>
        <Link activeStyle={activeStyle} to="/projects">Projects</Link>
      </Navigation>
    </header>
  );
}

export default Header;
