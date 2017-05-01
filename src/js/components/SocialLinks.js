import React from 'react';
import Icon from 'react-fontawesome';
import ExternalLink from './ExternalLink';
import Navigation from './Navigation';

const links = {
  twitter: 'https://twitter.com/SlavaPavlutin',
  github: 'https://github.com/slavapavlutin',
  email: 'mailto://sl.pavlutin@gmail.com',
  dribbble: 'https://dribbble.com/slavapavlutin',
};

function SocialLinks({ className }) {
  return (
    <Navigation className={className}>
      <ExternalLink href={links.twitter}>
        <Icon name="twitter" /> {' '}
        Twitter
      </ExternalLink>
      <ExternalLink href={links.github}>
        <Icon name="github" /> {' '}
        GitHub
      </ExternalLink>
      <ExternalLink href={links.dribbble}>
        <Icon name="dribbble" /> {' '}
        Dribbble
      </ExternalLink>
      <ExternalLink href={links.email}>
        <Icon name="envelope-o" /> {' '}
        Email
      </ExternalLink>
    </Navigation>
  );
}

export { links };
export default SocialLinks;
