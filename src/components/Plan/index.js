import React from "react";
import logo from "../../images/svg/logo.svg";
import { NavLink } from "react-router-dom";
import { MdCheck as Check } from "react-icons/md";
import "../../sass/App.scss";

function Plan() {
  return (
    <div className="header-container-plan">
      <div className="header-top-plan">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>{" "}
        <NavLink className="btn btn-signIn" to="/">
          Sign In
        </NavLink>
        {/* Header Content */}
      </div>
      <div className="header-info-plan">
        <span>STEP 1 OF 3</span>
        <h2>Choose your plan.</h2>
        <p>
          {" "}
          <Check style={{ marginRight: "8px" }} />
          You won't be charged until after your free month.
        </p>
        <p>
          {" "}
          <Check style={{ marginRight: "8px" }} /> We'll remind you three days
          before your trial ends.
        </p>
        <p>
          {" "}
          <Check style={{ marginRight: "8px" }} /> No commitments, cancel
          anytime.
        </p>
        <button className="btn btn-main">see the plans</button>
      </div>
    </div>
  );
}

export default Plan;
