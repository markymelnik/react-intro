import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }

    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);

  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  countDown() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {

    const { title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.countUp}>Count +</button>
        <button onClick={this.countDown}>Count -</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default Counter;