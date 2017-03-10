const React  = require('react');
const { connect } = require('react-redux');
const { toggleMenu } = require('../actions');


const Menu = React.createClass({
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
    onMenuClick: () => { dispatch(toggleMenu()) }
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Menu);
