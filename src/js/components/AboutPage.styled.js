import styled from 'styled-components';
import { mixins, text } from '../styles/config';

const borderRadius = '3px';
const borderWidth = '1px';

export const Container = styled.div`
  max-width: ${props => props.max || '70em'};
  padding: 0 5%;
  margin: 0 auto;
`;

export const Navbar = styled.ul`
  ${mixins.shadow}
  ${mixins.resetList};
  display: inline-block;
  background: white;
  border-radius: ${borderRadius};
  text-align: center;
`;

export const Item = styled.li`
  display: inline-block;
  margin: 0;
  text-align: center;
  font-size: 0.9em;

  &:first-child > * {
    margin-left: 0;
    border-radius: ${borderRadius} 0 0 ${borderRadius};
  }

  &:last-child > * {
    border-radius: 0 ${borderRadius} ${borderRadius} 0;
  }

  > *,
  > a:visited,
  > a:link {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0.5em 1em;
    border: ${borderWidth} solid ${text.veryLight};
    margin-left: -${borderWidth};
    color: black;
    text-decoration: none;
  }

  > * {
    color: ${text.light};
  }

  > a.active,
  > a:hover,
  > a:active {
    z-index: 2;
    background: #F5F5F6;
    border-color: ${text.veryLight};
    color: ${text.dark};
  }
`;

export const Section = styled.section`
  text-align: center;

  > ul {
    text-align: left;
  }
`;
