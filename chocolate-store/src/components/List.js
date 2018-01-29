import React, { Component } from "react";
import "./List.css";
import ListItem from "./ListItem";
import { NavLink, Route } from "react-router-dom";
import Header from "./Header";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chocolates: [
        {
          id: 1,
          name: "Diary Milk",
          brand: "Cadbury",
          size: "small",
          price: "5",
          soh: 10
        },
        {
          id: 2,
          name: "5 Star",
          brand: "Cadbury",
          size: "small",
          price: "5",
          soh: 10
        },
        {
          id: 3,
          name: "KitKat",
          brand: "Nestle",
          size: "small",
          price: "8",
          soh: 4
        }
      ]
    };
  }

  handleSell = id => {
    var chocolates = [];
    this.state.chocolates.forEach((ele, index, arr) => {
      if (ele.id === id) {
        let newChoc = Object.assign({}, ele);
        newChoc.soh -= 1;
        chocolates.push(newChoc);
      } else {
        chocolates.push(ele);
      }
    });
    //let newState = Object.assign({}, { chocolates });
    this.setState({ chocolates });
  };

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
            {this.state.chocolates.map(c => (
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
