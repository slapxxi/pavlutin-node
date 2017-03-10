import React from 'react';
import { connect } from 'react-redux';
import { searchTerm } from '../actions';


function Search({ searchTerm, onChange }) {
  return (<input
    className="search"
    type="search"
    placeholder="Search"
    value={searchTerm}
    onChange={handleChange(onChange)}
  />);
}

function handleChange(update) {
  return function handleOnChange(event) {
    update(event.target.value);
  };
}

function mapStateToProps({ searchTerm }) {
  return { searchTerm };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(term) { dispatch(searchTerm(term)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
