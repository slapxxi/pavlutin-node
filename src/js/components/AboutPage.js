import React from 'react';
import { setTitle } from '../utils';

function AboutPage() {
  setTitle('About Me');
  return (
    <div className="container">
      <h1>About Me</h1>
      <p>I&apos;m a frontend developer located in Russia.</p>

      <h2>Key Skills</h2>
      <ul>
        <li><a href="#skill-html">HTML</a></li>
        <li><a href="#skill-css">CSS</a></li>
        <li>JavaScript</li>
        <li>React/Redux</li>
        <li>Git</li>
      </ul>

      <h3 id="skill-html">HTML</h3>
      <p>
        Semantic markup.
      </p>

      <h3 id="skill-css">CSS</h3>
      <p>
        Latest standards.
      </p>

      <h2 id="contact">Contact Me</h2>
      <p>You can contact with me via the following mediums:</p>
      <ul>
        <li>Email</li>
        <li>Twitter</li>
      </ul>
    </div>
  );
}

export default AboutPage;
