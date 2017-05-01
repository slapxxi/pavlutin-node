import styled from 'styled-components';
import { mixins } from '../styles/config';

export const Container = styled.ul`
  ${mixins.clearfix}
  ${mixins.resetList}
`;
