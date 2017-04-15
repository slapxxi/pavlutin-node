import React from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

function Overlay({ isOpen, onClick }) {
  const clsName = isOpen ? 'overlay overlay_visible' : 'overlay';
  const primaryClsName = 'overlay__nav__item overlay__nav__item_primary';
  const secondaryClsName = 'overlay__nav__item overlay__nav__item_secondary';
  return (
    <section className={clsName}>
      <header className="overlay__header">
        <Logo className="overlay__logo">
          <Link to="/" onClick={onClick}>Slava Pavlutin</Link>
        </Logo>
        <Icon
          className="overlay__button"
          name="times"
          onClick={onClick}
        />
      </header>
      <nav className="overlay__nav">
        <ul>
          <li className={primaryClsName}>
            <Link to="/" onClick={onClick}>Home</Link>
          </li>
          <li className={primaryClsName}>
            <Link to="/blog" onClick={onClick}>Blog</Link>
          </li>
          <li className={primaryClsName}>
            <Link to="/projects" onClick={onClick}>Projects</Link>
          </li>
          <li className={secondaryClsName}>
            <Link to="/about" onClick={onClick}>About</Link>
          </li>
          <li className={secondaryClsName}>
            <Link to="/about#contact" onClick={onClick}>Contact</Link>
          </li>
        </ul>
      </nav>
      <footer className="overlay__footer">
        <SocialLinks />
      </footer>
    </section>
  );
}

export default Overlay;
