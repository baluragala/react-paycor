import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>This is body</p>
        <Footer />
      </div>
    );
  }
}

export default App;
