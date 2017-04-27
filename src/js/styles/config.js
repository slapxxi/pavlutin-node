import { css } from 'styled-components';

export const colors = {
  white: '#FCFCFF',
  black: '#0A0A15',
  greyDark: '#1A1C22',
  grey: '#252A30',
  greyMiddle: '#383A41',
  greyMiddleLight: '#70767F',
  greyLight: '#C5C8CD',
  greyVeryLight: '#D9DCE0',
  blue: '#1166FF',
  cyan: '#21D7FF',
  yellow: '#FFE070',
  red: '#ED1C24',
  mint: '#9BDAD8',
  jeans: '#4C5C74',
};

export const text = {
  middle: colors.greyMiddle,
  light: colors.greyLight,
  dark: colors.black,
  em: colors.cyan,
};

export const mixins = {
  hideText: css`text-indent: -9999px`,
};
