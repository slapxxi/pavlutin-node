import React, { Children } from 'react';


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

export { requireChildren };
export default requireChildren;
