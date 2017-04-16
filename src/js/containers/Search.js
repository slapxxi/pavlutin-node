import React from 'react';
import Icon from 'react-fontawesome';
import { connect } from 'react-redux';
import { changeSearchTerm } from '../store/actions/searchTerm';

class Search extends React.Component {
  constructor() {
    super();
    this.state = { inFocus: false };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFocus() {
    this.setState({ inFocus: !this.state.inFocus });
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const clsName = this.state.inFocus ? 'search search_focus' : 'search';
    return (
      <div className={clsName}>
        <label htmlFor="search" className="search__icon">
          <Icon name="search" />
        </label>

        <input
          id="search"
          autoComplete="off"
          type="search"
          className="search__input"
          placeholder="Search"
          value={this.props.searchTerm}
          onFocus={this.handleFocus}
          onBlur={this.handleFocus}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

function mapStateToProps({ searchTerm }) {
  return { searchTerm };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(term) { dispatch(changeSearchTerm(term)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
