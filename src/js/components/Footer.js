import React from 'react';
import SocialLinks from './SocialLinks';
import { combineClassNames, currentYear } from '../utils';


function Footer({ className }) {
  const clsName = combineClassNames(className, 'footer');
  return (
    <footer className={clsName}>
      <SocialLinks />
      <p>
        <small className="footer__copy">
          Slava Pavlutin &copy; 2016-{ currentYear() }
        </small>
      </p>
    </footer>
  );
}

export default Footer;
