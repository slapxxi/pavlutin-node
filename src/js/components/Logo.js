// @flow
const React = require('react');
const { combineClassNames } = require('../utils');


function Logo(props: Object) {
  const className = combineClassNames(props.className, 'logo');
  return (
    <h1 className={className}>
      { props.children }
    </h1>
  );
}

module.exports = Logo;
