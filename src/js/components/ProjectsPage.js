import React from 'react';
import { connect } from 'react-redux';
import Projects from './Projects';


function ProjectsPage({ projects }) {
  return (
    <div>
      <h1>Projects</h1>
      <Projects projects={projects} />
    </div>
  );
}

function mapStateToProps({ projects }) {
  return { projects };
}

export default connect(mapStateToProps)(ProjectsPage);
