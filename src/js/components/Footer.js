import React from 'react';
import SocialLinks from './SocialLinks';
import { withClassName } from './HOC';
import { currentYear } from '../utils';


function Footer({ className }) {
  return (
    <footer className={className}>
      <SocialLinks />
      <p>
        <small className="footer__copy">
          Slava Pavlutin &copy; 2016-{ currentYear() }
        </small>
      </p>
    </footer>
  );
}

export default withClassName('footer')(Footer);
