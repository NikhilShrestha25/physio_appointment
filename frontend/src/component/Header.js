import React, { useState } from "react";
import "../Header.css";
import MenuIcon from "../icons/MenuIcon";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }
  return (
    <nav className="header-box">
      <div className="site-logo"> Logo</div>
      <div className={`header-links ${menuOpen ? "open" : ""}`}>
        <h5>Home</h5>
        <h5>Contact</h5>
        <h5>About</h5>{" "}
      </div>
      <div className="user-box">Login</div>
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => toggleMenu()}
      >
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Header;
