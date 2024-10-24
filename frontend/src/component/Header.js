import React from "react";
import "../Header.css";
const Header = () => {
  return (
    <div className="header-box">
      <div className="header-left">
        <div className="site-logo">LOGO</div>
        <div className="header-links">
          <h5>Home</h5> <h5>Contact</h5> <h5>about</h5>{" "}
        </div>
      </div>
      <div className="user-box"></div>
    </div>
  );
};

export default Header;
