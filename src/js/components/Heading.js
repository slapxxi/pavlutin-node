import { kebabCase } from 'lodash';
import React, { Children } from 'react';
import Icon from 'react-fontawesome';

function Heading({ level, children }) {
  const Component = matchHeadingLevel(level);
  const id = generateId(children);
  if (id === '') {
    return <Component>{ children }</Component>;
  }
  return (
    <Component id={id} className="heading">
      { children }
      <a href={id} className="heading__anchor">
        {' '}
        <Icon name="link" />
      </a>
    </Component>
  );
}

function matchHeadingLevel(level) {
  switch (level) {
    case 1: return props => <h1 {...props} />;
    case 2: return props => <h2 {...props} />;
    case 3: return props => <h3 {...props} />;
    case 4: return props => <h4 {...props} />;
    case 5: return props => <h5 {...props} />;
    case 6: return props => <h6 {...props} />;
    default: return props => <h1 {...props} />;
  }
}

function generateId(children) {
  if (Children.count(children) === 1) {
    return `#${kebabCase(children)}`;
  }
  if (Children.count(children) > 1) {
    return `#${kebabCase(children[0])}`;
  }
  return '';
}

export default Heading;
