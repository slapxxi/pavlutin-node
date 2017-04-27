import React from 'react';
import Spin from './Spinner.styled';

function Spinner({ color }) {
  return <Spin color={color}>Loading...</Spin>;
}

export default Spinner;
