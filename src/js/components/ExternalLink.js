import React from 'react';

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      { children }
    </a>
  );
}

export default ExternalLink;
