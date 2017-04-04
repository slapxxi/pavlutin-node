import React from 'react';
import Icon from 'react-fontawesome';
import Navigation from './Navigation';


function SocialLinks() {
  return (
    <Navigation>
      <a
        href="https://twitter.com/SlavaPavlutin"
        rel="external noopener noreferrer"
        target="_blank"
      >
        <Icon name="twitter" /> {' '}
        Twitter
      </a>
      <a
        href="https://github.com/slavapavlutin"
        rel="external noopener noreferrer"
        target="_blank"
      >
        <Icon name="github" /> {' '}
        GitHub
      </a>
    </Navigation>
  );
}

export default SocialLinks;
