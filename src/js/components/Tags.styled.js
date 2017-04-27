import styled from 'styled-components';
import { text } from '../styles/config';

const mainColor = text.light;
const activeColor = text.em;
const textColor = text.middle;

export const TagsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Tag = styled.li`
  display: inline-block;
  position: relative;
  border: 2px solid ${onActive};
  border-radius: 2px;
  margin: 0.5em 0.7em 0 0;

  & > a {
    display: inline-block;
    padding: 0.1em 0.8em 0.1em 1.1em;
    text-decoration: none;
    color: ${({ active }) => (active ? activeColor : textColor)};
  }

  &:hover {
    border-color: ${activeColor};

    & > a {
      color: ${activeColor};
    }

    &::after {
      border-color: ${activeColor};
    }
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    top: calc(50% - 2px);
    left: 6px;
    width: 4px;
    height: 4px;
    border: 1px solid ${onActive};
    border-radius: 100px;
  }
`;

function onActive({ active }) {
  return active ? activeColor : mainColor;
}
