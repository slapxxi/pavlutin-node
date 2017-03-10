const React = require('react');
const { v4 } = require('node-uuid');
const { lorem } = require('../../../lib/helpers');


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      { lorem(3).map(t => <p key={v4()}>{t}</p>)}
    </div>
  );
}

module.exports = HomePage;
