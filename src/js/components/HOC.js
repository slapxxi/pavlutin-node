import React, { Children } from 'react';
import { combineClassNames, setTitle } from '../utils';

/**
 * Higher order component that requires children to exist
 * in order to render the component.
 * @param  {React.Component} Component component to wrap
 * @return {React.Component} wrapped component
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

/**
 * Higher order component which modifies className prop
 * to include a specified class name.
 * @param  {String} clsName class to include in resulting className
 * @return {React.Component} wrapped component
 */
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

/**
 * Higher order component that updates page title.
 */
function withPageTitle(pageTitle) {
  let updateTitle;
  if (typeof pageTitle === 'function') {
    updateTitle = props => setTitle(pageTitle(props));
  } else {
    updateTitle = () => setTitle(pageTitle);
  }
  return function withPageTitleSet(Component) {
    class WithPageTitle extends React.Component {
      componentDidMount() {
        updateTitle(this.props);
      }

      componentWillReceiveProps(props) {
        updateTitle(props);
      }

      render() {
        return <Component {...this.props} />;
      }
    }
    WithPageTitle.displayName = `WithPageTitle(${Component.name})`;
    return WithPageTitle;
  };
}

export { requireChildren, withClassName, withPageTitle };
