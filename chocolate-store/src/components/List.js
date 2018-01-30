import React, { Component } from "react";
import "./List.css";
import ListItem from "./ListItem";
import { NavLink, Route } from "react-router-dom";
import Header from "./Header";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleSell = id => {
  //   var chocolates = [];
  //   this.state.chocolates.forEach((ele, index, arr) => {
  //     if (ele.id === id) {
  //       let newChoc = Object.assign({}, ele);
  //       newChoc.soh -= 1;
  //       chocolates.push(newChoc);
  //     } else {
  //       chocolates.push(ele);
  //     }
  //   });
  //   //let newState = Object.assign({}, { chocolates });
  //   this.setState({ chocolates });
  // };

  render() {
    return (
      <div>
        <p>List of chocolates</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Size</th>
              <th>Price</th>
              <th>Soh</th>
            </tr>
          </thead>
          <tbody>
            {this.state.chocolates &&
              this.state.chocolates.map(c => (
                <ListItem
                  item={c}
                  key={c.id}
                  onSell={this.handleSell}
                  match={this.props.match}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
