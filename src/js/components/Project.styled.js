import styled from 'styled-components';
import { text } from '../styles/config';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 1em;
  background: white;
  border: 2px solid ${text.middle};
  border-radius: 3px;
  transition: all 0.4s;
  cursor: pointer;

  :hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;
