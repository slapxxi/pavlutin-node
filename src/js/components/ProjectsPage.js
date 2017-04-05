import React from 'react';
import { connect } from 'react-redux';
import Projects from './Projects';

function ProjectsPage({ projects }) {
  return (
    <section className="page-projects">
      <h1>Projects</h1>
      <Projects projects={projects} />
    </section>
  );
}

function mapStateToProps({ projects }) {
  return { projects };
}

export default connect(mapStateToProps)(ProjectsPage);
