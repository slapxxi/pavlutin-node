import React from 'react';
import Title from './Title';
import Type from './Type';
import { cycle, setTitle } from '../utils';

class HomePage extends React.Component {
  static titles = [
    "I'm a frontend developer.",
    'I love my work.',
    "I'm a professional.",
  ];

  constructor() {
    super();
    this.index = 0;
    this.nextTitle = cycle(HomePage.titles);
    this.state = { title: this.nextTitle() };
  }

  componentDidMount() {
    setTitle();
    this.intervalID = setInterval(() => {
      const title = this.nextTitle();
      this.setState({ title });
    }, 4500);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <section className="homepage">
        <header className="homepage__header">
          <img src="/img/developer.svg" alt="developer" />
          <Title className="homepage__title">
            <Type speed={75} text={this.state.title} />
          </Title>
        </header>
      </section>
    );
  }
}

export default HomePage;
