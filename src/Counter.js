import React from 'react';

class Counter extends Component {
  constructor() {
    super();
    console.debug('constructor');
    return {};
  }

  componentWillMount() {
    console.debug('componentWillMount');
  }

  componentWillReceiveProps() {
    console.debug('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.debug('shouldComponentUpdate');
  }

  componentWillUpdate() {
    console.debug('componentWillUpdate');
    return true;
  }

  componentDidUpdate() {
    console.debug('componentDidUpdate');
  }

  componentWillUnmount() {
    console.debug('componentWillUnmount');
  }

  render() {
    console.debug('render');
    return (
      <h1 className="text-muted">Counter: {this.props.value}</h1>
    )
  }
}

Counter.defaultProps = {
  console.debug('defaultProps');
  return {};
}

export default Counter;
