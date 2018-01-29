import React, { Component } from "react";

class AddChocolate extends Component {
  priceEle;
  constructor(props) {
    super(props);
    this.state = { name: "silk" };
  }

  handleSubmit = e => {
    console.log(this.priceEle.value);
    this.priceEle.value = this.priceEle.value * 1000;
    e.preventDefault();
  };

  componentWillMount() {
    console.log("componentWillMount", this.priceEle);
  }

  componentDidMount() {
    console.log("componentDidMount", this.priceEle);
  }

  render() {
    console.log("render", this.priceEle);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <input type="text" ref={ele => (this.priceEle = ele)} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddChocolate;
