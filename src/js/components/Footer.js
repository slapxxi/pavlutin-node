// @flow
import React from 'react';
import Navigation from './Navigation';
import { combineClassNames, currentYear } from '../utils';


function Footer(props: { className: ?string }) {
  const className = combineClassNames(props.className, 'footer');
  return (
    <footer className={className}>
      <Navigation>
        <a href="https://twitter.com/SlavaPavlutin">Twitter</a>
        <a href="https://github.com/slavapavlutin">GitHub</a>
      </Navigation>

      <p>
        <small className="footer__copy">
          Slava Pavlutin &copy; 2016-{ currentYear() }
        </small>
      </p>
    </footer>
  );
}

export default Footer;
