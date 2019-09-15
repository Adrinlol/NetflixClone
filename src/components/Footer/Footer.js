import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../sass/Footer.scss";
import { MdKeyboardArrowDown as Arrow } from "react-icons/md";
import { MdLanguage as Language } from "react-icons/md";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <span style={{ marginLeft: "17%", fontSize: "1.125rem" }}>
          Questions? Call 1-877-742-1335
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Ways to Watch</Link>
            </li>
            <li>
              <Link to="/">Corporate Information</Link>
            </li>
            <li>
              <Link to="/">Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Contact Use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/">Redeem Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Media Center</Link>
            </li>
            <li>
              <Link to="/">Buy Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Cookie Preferences</Link>
            </li>
            <li>
              <Link to="/">Legal Notes</Link>
            </li>
          </ul>
          <div className="btn-language">
            <Language size={20} />
            &nbsp;&nbsp;English&nbsp;&nbsp;
            <Arrow />
          </div>
        </div>
        <span style={{ marginLeft: "17%", fontSize: "0.9rem" }}>
          Netflix Georgia
        </span>
      </div>
    );
  }
}

export default Footer;
