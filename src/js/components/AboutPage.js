import React from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink as Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import ExternalLink from './ExternalLink';
import { links } from './SocialLinks';
import { Navbar, Item, Section, Container } from './AboutPage.styled';
import { withPageTitle } from './HOC';

function AboutPage() {
  return (
    <Router hashType="noslash">
      <Container max="100%">
        <h1>About Me</h1>
        <p>
          I am a front-end engineer located in Saint Pertersburg, Russia.
          I have one year of professional (and six more years
          as hobby) experience in developing
          websites and web-applications based on web standard
          technologies such as HTML5, CSS, JavaScript,
          React and Redux.
        </p>
        <Container max="50em">
          <Section>
            <h2>Expertise and Core Skills</h2>
            <Navbar>
              <Item>
                <Link to="/js">JavaScript</Link>
              </Item>
              <Item>
                <Link to="/html">HTML and CSS</Link>
              </Item>
              <Item>
                <Link to="/workflow">Workflow</Link>
              </Item>
              <Item>
                <Link to="/other">Other</Link>
              </Item>
            </Navbar>
          </Section>

          <Switch>
            <Route path="/html" component={HTML} />
            <Route path="/js" component={JavaScript} />
            <Route path="/workflow" component={Workflow} />
            <Route path="/other" component={Other} />
            <Redirect to="/js" />
          </Switch>
        </Container>
        <h2 id="contact">Contact Me</h2>
        <p>You can contact with me by:</p>
        <ul>
          <li>
            <ExternalLink href={links.twitter}>Twitter</ExternalLink>
          </li>
          <li>
            <ExternalLink href={links.email}>Email</ExternalLink>
          </li>
          <li>
            <ExternalLink href={links.discord}>Discord</ExternalLink>
          </li>
        </ul>
      </Container>
    </Router>
  );
}

function HTML() {
  return (
    <Section>
      <h3>HTML and CSS</h3>
      <ul>
        <li>
          <strong>Principles</strong> -
          responsive mobile-first development,
          semantic markup, progressive enhancement
        </li>
        <li>
          <strong>Conventions and Guidelines</strong> -
          BEM, component based development, performance budget
          development
        </li>
        <li>
          <strong>CSS Preprocessors</strong> - SCSS, PostCSS
        </li>
        <li>
          <strong>HTML Template Languages</strong> -
          Jade, Haml
        </li>
        <li>
          <strong>Accessibility</strong> - accessible markup and features
        </li>
      </ul>
    </Section>
  );
}

function JavaScript() {
  return (
    <Section>
      <h3>Javascript</h3>
      <ul>
        <li>
          <strong>Libraries &amp; Frameworks</strong> -
          React, Redux, jQuery
        </li>
        <li>
          <strong>Latest Standards</strong> -
          ES2015, ES6, Babel, Webpack
        </li>
        <li>
          <strong>Build Processes</strong> -
          Webpack, Gulp, NPM, Yarn
        </li>
        <li>
          <strong>Node.js</strong> - strong knowledge.
        </li>
        <li>
          <strong>Testing</strong> - Jest, Mocha, Chai,
          Sinon etc.
        </li>
        <li>
          <strong>Automation</strong> - continuous integration with
          Travis CI
        </li>
        <li>
          <strong>Performance</strong> - minification, optimization
          and debugging
        </li>
      </ul>
    </Section>
  );
}

function Other() {
  return (
    <Section>
      <h3>Other</h3>
      <ul>
        <li>
          <strong>Personal Qualities</strong> -
          relentless self-motivated learning, communication and critical
          thinking
        </li>
        <li>
          <strong>Programming Languages</strong> -
          JavaScript, Python, Ruby, Elixir
        </li>
        <li>
          <strong>Languages</strong> -
          English, Russian
        </li>
        <li>
          <strong>Backend</strong> - Node.js, Django, Ruby on Rails
        </li>
        <li>
          <strong>Databases</strong> - MongoDB, Postgres
        </li>
        <li>
          <strong>Editors</strong> Atom, Vim
        </li>
        <li>
          <strong>RESTful APIs</strong>
        </li>
        <li>
          <strong>Command Line Tools</strong> -
          Fish, Zsh, Tmux
        </li>
      </ul>
    </Section>
  );
}

function Workflow() {
  return (
    <Section>
      <h3>Workflow</h3>
      <ul>
        <li>
          <strong>TDD</strong> - with continuous integration
        </li>
        <li>
          <strong>Static Checking</strong> - ESLint, Flow, Stylelint
        </li>
        <li>
          <strong>Git</strong> - Git Flow
        </li>
        <li>
          <strong>GitHub</strong> - GitHub Flow
        </li>
      </ul>
    </Section>
  );
}

export default withPageTitle('About')(AboutPage);
