import React from 'react';
import ExternalLink from './ExternalLink';
import { Links, Container, Copy } from './Footer.styled';
import { links } from './SocialLinks';
import { currentYear } from '../utils';

function Footer() {
  return (
    <footer>
      <Container>
        <Links />
        <p>
          This site is an {' '}
          <ExternalLink href={links.openSource}>
            open-source
          </ExternalLink>{' '}
          project.
          Coded in {' '}
          <ExternalLink href="https://atom.io">
            Atom
          </ExternalLink>. {' '}
          Built using {' '}
          <ExternalLink href="https://facebook.github.io/react/">
            React
          </ExternalLink>{' '}
          and {' '}
          <ExternalLink href="http://redux.js.org">
            Redux
          </ExternalLink>{' '}
          with {' '}
          <ExternalLink href="https://styled-components.com">
            Styled Components
          </ExternalLink>.
        </p>
        <Copy>
          Slava Pavlutin &copy; 2016-{ currentYear() }
        </Copy>
      </Container>
    </footer>
  );
}

export default Footer;
