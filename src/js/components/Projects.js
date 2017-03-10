import React from 'react';
import Project from './Project';


function Projects({ projects }) {
  if (projects.length === 0) {
    return <p>There are no projects yet.</p>;
  }
  return (
    <ul className="projects">
      { projects.map(mapProjectToListItem) }
    </ul>
  );
}

function mapProjectToListItem(project) {
  return (
    <li className="projects__project">
      <Project project={project} />
    </li>
  );
}

export default Projects;
