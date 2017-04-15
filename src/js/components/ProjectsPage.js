import React from 'react';
import { connect } from 'react-redux';
import Projects from './Projects';
import Spinner from './Spinner';
import { fetchProjects } from '../actions';
import { setTitle } from '../utils';

class ProjectsPage extends React.Component {
  componentDidMount() {
    if (this.props.lastUpdated === 0) {
      this.props.fetchProjects();
    }
  }

  render() {
    const { projects, isFetching } = this.props;
    setTitle('Projects');
    return (
      <section className="page-projects">
        <h1>Projects</h1>
        {isFetching ? <Spinner /> : <Projects projects={projects} />}
      </section>
    );
  }
}

function mapStateToProps({ projects }) {
  const { items, isFetching, lastUpdated } = projects;
  return { projects: items, isFetching, lastUpdated };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProjects() {
      dispatch(fetchProjects());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
