import React from 'react';
import { Container } from './Project.styled';

function Project({ project }) {
  return (
    <Container>
      <h1>{ project.title }</h1>
    </Container>
  );
}

export default Project;
