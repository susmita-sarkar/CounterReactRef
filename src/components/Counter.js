import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rem: 0
    };
  }

  timer = () => {
    this.setState(prevState => ({
      rem: prevState.rem + 1
    }));
  };

  componentDidUpdate(prevProps) {
    console.log("update called");
    if (this.props.signal !== prevProps.signal) {
      console.log("itna barr");
      this.countId = setInterval(this.timer, 100);
    }
  }

  render() {
    if (this.state.rem === this.props.num) {
      clearInterval(this.countId);
    }
    return <div>{this.state.rem}</div>;
  }
}
export default Counter;
