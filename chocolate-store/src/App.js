import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import AddChocolate from "./components/AddChocolate";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import { Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header />
        <List />
        {/*<AddChocolate /> 
        <Switch>
          <Route exact path="/chocolates" component={List} />
          <Route path="/chocolates/:cid/detail" component={Detail} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route render={() => <h1>NOT FOUND</h1>} />
          
        </Switch>
        */}
      </div>
    );
  }
}

export default App;
