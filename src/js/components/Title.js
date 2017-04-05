import React, { Children } from 'react';
import { withClassName } from './HOC';


function Title({ children, className }) {
  if (Children.count(children) === 1) {
    return <h1 className={className}>{children}</h1>;
  }
  return (
    <hgroup className={className}>
      { Children.map(children, (child, i) => {
        if (i === 0) {
          return React.cloneElement(child, { className: 'title__main' });
        }
        return React.cloneElement(child, { className: 'title__secondary' });
      })}
    </hgroup>
  );
}

export default withClassName('title')(Title);
