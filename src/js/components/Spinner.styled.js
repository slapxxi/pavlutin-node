import styled, { keyframes } from 'styled-components';
import chroma from 'chroma-js';
import { mixins, text } from '../styles/config';

const size = 37;
const clr = text.dark;

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span`
  ${mixins.hideText}
  display: inline-block;
  width: ${size}px;
  height: ${size}px;
  border: ${size / 5}px solid
    ${({ color = clr }) => chroma(color).alpha(0.3).css()};
  border-top-color: ${({ color = clr }) => chroma(color).alpha(0.9).css()};
  border-radius: 50%;
  font-size: 10px;
  transform: translateZ(0);
  animation: ${rotate360} 0.65s infinite linear;
`;

export default Spinner;
