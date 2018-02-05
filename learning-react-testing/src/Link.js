import React, { Component } from "react";

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    window.alert("clicked");
    this.setState({ clicked: true });
  };

  render() {
    let { url, title } = this.props;
    return (
      <a href={url} onClick={this.handleClick}>
        {title}
      </a>
    );
  }
}

export default Link;
