import styled, { keyframes } from 'styled-components';
import chroma from 'chroma-js';
import { mixins, text } from '../styles/config';

const size = 4;
const clr = text.dark;

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  ${mixins.hideText}
  position: relative;
  width: ${size}em;
  height: ${size}em;
  margin: 0 auto;
  border: ${size / (size * 1.5)}em solid
    ${({ color = clr }) => chroma(color).alpha(0.3).css()};
  border-top-color: ${({ color = clr }) => chroma(color).alpha(0.9).css()};
  border-radius: 50%;
  font-size: 10px;
  transform: translateZ(0);
  animation: ${rotate360} 0.65s infinite linear;
`;

export default Spinner;
