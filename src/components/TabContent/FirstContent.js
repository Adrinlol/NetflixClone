import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../../images/tab-1-pic.png";
import "../../sass/App.scss";

function FirstContent() {
  return (
    <div className="main">
      <div className="first-container">
        <div className="first-tab-content">
          <div>
            <span className="title">
              If you decide Netflix isn't for you - no problem. No commitmentm.
              Cancel anytime.
            </span>{" "}
            <br />
            <NavLink to="/Plan">
              <button className="btn btn-cancel margin">Try it now</button>
            </NavLink>
          </div>
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FirstContent;
