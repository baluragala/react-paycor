import React, { Component } from "react";
// function Header(args) {
//   let { title, subtitle } = args.options;
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h3>{subtitle}</h3>
//     </div>
//   );
// }

class Header extends Component {
  render() {
    let { title, subtitle } = this.props.options;
    return (
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    );
  }
}

export default Header;
