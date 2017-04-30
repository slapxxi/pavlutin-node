import styled from 'styled-components';
import { mixins, text } from '../styles/config';

export const Container = styled.div`
  ${mixins.box()};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: white;
`;

export const Header = styled.header`
  flex: 2;
  padding: 1em 1.5em;
`;

export const Title = styled.h2`
  padding-bottom: 0;
  margin: 0;

  > a {
    color: ${text.dark};

  }

  > a:hover {
    text-decoration: none;
    color: ${text.em};
  }
`;

export const Meta = styled.div`
  padding-bottom: 0;
  color: ${text.light};
`;

export const Description = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  padding: 0 1.5em 1.5em;

  p {
    margin: 0;
  }
`;

export const Button = styled.div`
  border-top: 1px solid ${text.veryLight};
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8em;

  > a {
    display: block;
    padding: 0.7em 1.5em;
    color: ${text.middle};
  }

  > a:hover {
    background: ${text.veryLight};
    text-decoration: none;
    color: ${text.dark};
  }
`;
