import $ from 'jquery';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import Logo from './Logo';
import Overlay from './Overlay';
import Navigation from './Navigation';
import { withClassName } from './HOC';

class Header extends React.Component {
  constructor() {
    super();
    this.$html = $('html, body');
    this.state = { isOverlayOpen: false };
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  openOverlay() {
    this.$html.addClass('no-scroll');
    this.setState({ isOverlayOpen: true });
  }

  closeOverlay() {
    this.$html.removeClass('no-scroll');
    this.setState({ isOverlayOpen: false });
  }

  render() {
    return (
      <header className={this.props.className}>
        <Logo className="header__logo">
          <Link to="/">Slava Pavlutin</Link>
        </Logo>

        <Navigation className="header__nav">
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </Navigation>

        <div className="header__menu">
          <Icon className="header__menu__icon" name="bars" onClick={this.openOverlay} />
        </div>

        <Overlay
          isOpen={this.state.isOverlayOpen}
          onClick={this.closeOverlay}
        />
      </header>
    );
  }
}

export default withClassName('header')(Header);
