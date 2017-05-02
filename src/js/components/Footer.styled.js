import styled from 'styled-components';
import SocialLinks from './SocialLinks';
import { Container as LayoutContainer } from './Layout.styled';
import { text } from '../styles/config';

const color = text.light;
const activeColor = text.middle;

export const Container = styled(LayoutContainer)`
  max-width: 100%;
  padding-top: 2em;

  > p {
    margin: 0;
    font-size: 0.8em;
    color: ${color};
  }

  > p > a:link,
  > p > a:visited {
    text-decoration: underline;
    color: ${color};
  }

  > p > a:hover,
  > p > a:active {
    text-decoration: none;
    color: ${activeColor};
  }
`;

export const Links = styled(SocialLinks)`
  font-size: 0.8em;

  a:link,
  a:visited {
    color: ${color};
  }

  a:hover,
  a:active {
    color: ${activeColor};
  }
`;

export const Copy = styled.small`
  clear: both;
  display: block;
  padding: 1em 0;
  font-size: 0.7em;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  color: ${text.veryLight};
`;
