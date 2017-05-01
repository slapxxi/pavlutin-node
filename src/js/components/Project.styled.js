import styled from 'styled-components';
import { text } from '../styles/config';

export const Container = styled.li`
  box-sizing: border-box;
  padding: 1em;
  border: 2px solid ${text.middle};
  margin: 0;
  background: white;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;
