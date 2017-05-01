import React from 'react';
import { Container } from './Project.styled';

function Project({ project, key }) {
  return (
    <Container key={key}>
      <h1>{ project.title }</h1>
    </Container>
  );
}

export default Project;
