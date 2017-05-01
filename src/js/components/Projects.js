import React from 'react';
import Project from './Project';
import { Container } from './Projects.styled';

function Projects({ projects }) {
  if (projects.length === 0) {
    return <p>There are no projects yet.</p>;
  }
  return (
    <Container>
      {projects.map(p => <Project key={p.id} project={p} />)}
    </Container>
  );
}

export default Projects;
