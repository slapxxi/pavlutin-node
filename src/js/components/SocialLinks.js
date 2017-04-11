import React from 'react';
import Icon from 'react-fontawesome';
import Navigation from './Navigation';

function SocialLinks({ className }) {
  return (
    <Navigation className={className}>
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
      <a
        href="https://dribbble.com/slavapavlutin"
        rel="external noopener noreferrer"
        target="_blank"
      >
        <Icon name="dribbble" /> {' '}
        Dribbble
      </a>
    </Navigation>
  );
}

export default SocialLinks;
