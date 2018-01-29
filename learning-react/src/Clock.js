import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { CURRENTTIME: new Date().toTimeString() };
    setInterval(() => {
      this.setState({ CURRENTTIME: new Date().toTimeString() });
      console.log(this.state);
    }, 1000);
  }

  render() {
    console.log("render");
    return <h1>{this.state.CURRENTTIME}</h1>;
  }
}

export default Clock;
