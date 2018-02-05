import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Link from "./Link";

class App extends Component {
  displayName = "App";

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link url="https://www.google.com" title="Google" />
        <Link url="https://www.apple.com" title="Apple" />
        <Link url="https://www.zeolearn.com" title="Zeolearn" />
      </div>
    );
  }
}

export default App;
