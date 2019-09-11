import React, { Component } from 'react';
import logo from '../../images/svg/logo.svg';
import { NavLink } from 'react-router-dom';
import '../../sass/Button.scss';
import { MdKeyboardArrowLeft } from "react-icons/md";


class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-top">
                <img src={logo} alt="" />
                <NavLink className="btn btn-signIn">Sign In</NavLink>
                </div>
                {/* Header Content */}
                <div className="header-info">
                <h1>See what's next.</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <button className="btn btn-main">try it now</button>
                </div>
            </div>
        )
    }
}

export default Header;