import React, { Component } from "react";
import { search } from "../actionCreators/search";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Search</h2>
        <input
          type="text"
          value={this.props.term}
          onChange={this.props.doSearch}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    term: state.searchState.term,
    results: state.searchState.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doSearch: e => dispatch(search(e.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
