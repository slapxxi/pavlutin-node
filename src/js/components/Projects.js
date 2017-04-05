import React from 'react';

function Projects({ projects }) {
  if (projects.length === 0) {
    return <p>There are no projects yet.</p>;
  }
  return (
    <ul className="projects">
      {
        projects.map(p => <li className="projects__project">
          <h1>{p.title}</h1>
        </li>)
      }
    </ul>
  );
}

export default Projects;
