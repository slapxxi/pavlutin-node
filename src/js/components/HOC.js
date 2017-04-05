import React, { Children } from 'react';
import { combineClassNames } from '../utils';

/**
 * Higher order component that requires children to exist
 * in order to render the component.
 * @param  {React.Component} Component Component to wrap
 * @return {React.Component} Wrapped Component
 */
function requireChildren(Component) {
  function RequireChildren(props) {
    if (Children.count(props.children) === 0) {
      return null;
    }
    return <Component {...props} />;
  }
  RequireChildren.displayName = `RequireChildren(${Component.name})`;
  return RequireChildren;
}

function withClassName(clsName) {
  return function withClassNameSaved(Component) {
    function WithClassName(props) {
      const result = combineClassNames(clsName, props.className);
      return <Component {...props} className={result} />;
    }
    WithClassName.displayName = `WithClassName(${Component.name})`;
    return WithClassName;
  };
}

export { requireChildren, withClassName };
export default requireChildren;
