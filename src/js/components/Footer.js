import React from 'react';
import Icon from 'react-fontawesome';
import Navigation from './Navigation';
import { combineClassNames, currentYear } from '../utils';


function Footer({ className }) {
  const clsName = combineClassNames(className, 'footer');
  return (
    <footer className={clsName}>
      <Navigation>
        <a href="https://twitter.com/SlavaPavlutin">
          <Icon name="twitter" /> {' '}
          Twitter
        </a>
        <a href="https://github.com/slavapavlutin">
          <Icon name="github" /> {' '}
          GitHub
        </a>
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
