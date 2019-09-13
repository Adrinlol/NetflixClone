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
          Questions? Call <Link>1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Contact Use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Account</Link>
            </li>
            <li>
              <Link>Redeem Gift Cards</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Media Center</Link>
            </li>
            <li>
              <Link>Buy Gift Cards</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notes</Link>
            </li>
          </ul>
          <div className="btn-language">
        <Language size={20}/>
        &nbsp;&nbsp;English&nbsp;&nbsp;
        <Arrow/>
          </div>
        </div>
        <span style={{ marginLeft:'17%', fontSize:'0.9rem'}}>Netflix Georgia</span>
      </div>
    );
  }
}

export default Footer;
