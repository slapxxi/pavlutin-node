import styled from 'styled-components';

export const Container = styled.div`
  clear: both;
  box-sizing: border-box;
  max-width: ${props => props.max || '70em'};
  padding: 0 5%;
  margin: 0 auto;
`;
