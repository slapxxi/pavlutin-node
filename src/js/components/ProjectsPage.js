import React from 'react';
import { connect } from 'react-redux';
import Projects from './Projects';
import { setTitle } from '../utils';

function ProjectsPage({ projects }) {
  setTitle('Projects');
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
