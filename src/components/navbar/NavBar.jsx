// Navbar.js
import React, { useState } from "react";
// import { div } from "react-router-dom";
import "../style/common.css";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  const handleDropdownHover = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="new-nav ">
      <div className="new-logo black">Your Logo</div>

      <div className={`menu black new-drop ${isMobile ? "mobile" : ""}`}>
        <div
          className="menu-item black new-drop"
          onMouseEnter={handleDropdownHover}
          onMouseLeave={handleDropdownLeave}
        >
          Home
          {showDropdown && (
            <div className="dropdown-menu black">
              <div className="dropdown-item black">Submenu 1</div>
              <div className="dropdown-item black">Submenu 2</div>
            </div>
          )}
        </div>
        <div className="menu-item black new-drop">About</div>
        <div className="menu-item black new-drop">Contact</div>
        <div className="menu-item black new-drop">Contact</div>
        <div className="menu-item black new-drop">Contact</div>
        <div className="menu-item black new-drop">Contact</div>
      </div>

      <div className="mobile-menu-icon" onClick={handleMenuClick}>
        {isMobile ? "X" : "☰"}
      </div>
    </nav>
  );
};

export default NavBar;
