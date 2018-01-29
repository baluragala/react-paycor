import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  };

  static defaultProps = {
    title: "GIFT"
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    console.log("render");
    return (
      <tr>
        <td>
          <Link to={`${this.props.match.url}/${this.props.item.id}/detail`}>
            {this.props.item.name}
          </Link>
        </td>
        <td>{this.props.item.brand}</td>
        <td>{this.props.item.size}</td>
        <td>{this.props.item.price}</td>
        <td className={this.props.item.soh > 0 ? "" : "no-stock"}>
          {this.props.item.soh > 0 ? this.props.item.soh : "No Stock"}
        </td>
        {this.props.item.soh > 0 ? (
          <td>
            <input
              type="button"
              value={this.props.title}
              onClick={e => {
                console.log(e);
                this.props.onSell(this.props.item.id);
              }}
            />
          </td>
        ) : (
          ""
        )}
      </tr>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", this.props, nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.item, nextProps.item);
    return this.props.item !== nextProps.item;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", this.props, nextProps);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.props, prevProps);
  }
}

export default ListItem;
