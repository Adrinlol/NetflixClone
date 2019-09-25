import React, { Component } from "react";
import logo from "../../images/svg/logo.svg";
import { NavLink } from "react-router-dom";
import "../../sass/Button.scss";
import "../../sass/Header.scss";
import { MdKeyboardArrowRight as Icon } from "react-icons/md";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-top">
          <img src={logo} alt="" />
          <NavLink className="btn btn-signIn" to="/">
            Sign In
          </NavLink>
        </div>
        {/* Header Content */}
        <div className="header-info">
          <h1>See what's next.</h1>
          <h2>Watch anywhere. Cancel anytime</h2>
          <NavLink to="/Plan">
            <button className="btn btn-main">
              try it now
              <Icon size={40} />
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
