import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
const Header = props => (
  <div>
    <h1>{props.title}</h1>
    {/*<nav>
      <ul>
        <li>
          <NavLink to="/home" activeStyle={{ backgroundColor: "red" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/chocolates" activeClassName="active">
            Chocolates
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>*/}
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
