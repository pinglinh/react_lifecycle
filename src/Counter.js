import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <h1 className="text-muted">Counter: {this.props.value}</h1>
    );
  }
}

Counter.defaultProps = {

}
console.log('defaultProps');

export default Counter;
