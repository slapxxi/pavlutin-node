import React from 'react';

class Type extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.index = 0;
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(this.update, this.props.speed);
  }

  componentWillReceiveProps(props) {
    if (props.text !== this.state.text) {
      this.reset();
    }
  }

  shouldComponentUpdate(props, state) {
    if (props.text === this.state.text) {
      return false;
    }
    if (state.text === this.state.text) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  update() {
    const { text } = this.props;
    if (this.index === text.length) {
      clearInterval(this.intervalID);
    } else {
      this.index += 1;
      this.setState({ text: text.slice(0, this.index) });
    }
  }

  remove() {
    if (this.index === 0) {
      clearInterval(this.intervalID);
      this.intervalID = setInterval(this.update, this.props.speed);
    } else {
      this.index -= 1;
      this.setState({ text: this.state.text.slice(0, this.index) });
    }
  }

  reset() {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.remove, this.props.speed / 2);
  }

  render() {
    return <span>{this.state.text}</span>;
  }
}

export default Type;
