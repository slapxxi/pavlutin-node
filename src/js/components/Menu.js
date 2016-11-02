import React from 'react';
import { connect } from 'react-redux';
import { MENU_TOGGLE } from '../actions/actions';


let Menu = React.createClass({
  render() {
    const className = this.props.isMenuActive ? 'btn-menu header__menu btn-menu_active' : 'btn-menu header__menu';
    return <button className={className} onClick={this.props.onMenuClick}></button>
  }
});

function mapStateToProps({isMenuActive}) {
  return {isMenuActive};
}

function mapDispatchToProps(dispatch) {
  return {
    onMenuClick: () => { dispatch({type: MENU_TOGGLE})}
  }
}

Menu = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default Menu;
