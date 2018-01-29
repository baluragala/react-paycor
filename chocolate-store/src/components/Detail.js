import React, { Component } from "react";

class Detail extends Component {
  render() {
    return (
      <div>
        <h1>This is detail page for id : {this.props.match.params["cid"]}</h1>
        <button onClick={() => this.props.history.go(-100)}>Go Back</button>
        <button onClick={() => this.props.history.replace("/home")}>
          Go Home
        </button>
      </div>
    );
  }
}

export default Detail;
