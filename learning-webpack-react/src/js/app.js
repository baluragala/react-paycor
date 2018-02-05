import React, { Component } from "react";
import { render } from "react-dom";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Webpack</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
