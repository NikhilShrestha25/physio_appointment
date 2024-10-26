import React from "react";
import "../Header.css";
import MenuIcon from "../icons/MenuIcon";
const Header = () => {
  return (
    <div className="header-box">
      <div className="site-logo"> Logo</div>
      <div className="header-links">
        {" "}
        <h5>Home</h5>
        <h5>Contact</h5>
        <h5>About</h5>{" "}
      </div>
      <div className="user-box"></div>
    </div>
  );
};

export default Header;
