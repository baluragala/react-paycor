import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Clock from "./Clock";

class App extends Component {
  message = "this  is message";
  getTitle() {
    return "This is title";
  }
  render() {
    return (
      <div
        style={{ backgroundColor: "yellow" }}
        className="main"
        id="root"
        title="tooltip"
        data-attr="20"
      >
        {/* this is comment */}
        <Header
          options={{
            title: "Super Store!!",
            subtitle: "Anything you need is available!!"
          }}
          callBack={this.getTitle}
        />
        <p>{new String("hello")}</p>
        <Clock />
        <Footer />
      </div>
    );
  }
}

export default App;
