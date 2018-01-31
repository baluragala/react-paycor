import React, { Component } from "react";
import "./List.css";
import ListItem from "../components/ListItem";
import { NavLink, Route } from "react-router-dom";
import Header from "../components/Header";

import { connect } from "react-redux";
import { getChocolatesActionCreator } from "../actionCreators";

class List extends Component {
  constructor(props) {
    super(props);
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
        <button onClick={this.props.dispatchGetChocolates}>
          Get chocolates
        </button>
        {this.props.isLoading && <p>Please wait...</p>}
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
            {this.props.cts &&
              this.props.cts.map(c => (
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

function mapStateToProps(state) {
  return {
    cts: state.chocolates,
    offers: state.offers,
    sales: state.sales,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetChocolates: () => dispatch(getChocolatesActionCreator())
  };
}

let connectedHOC = connect(mapStateToProps, mapDispatchToProps);
let containerList = connectedHOC(List);
export default containerList;
