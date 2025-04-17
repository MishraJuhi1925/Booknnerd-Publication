import React, { useState } from "react";
import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";  

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <NavLink to="/" end>
          <img
            src="/images/logo2.PNG"
            alt="Booknerd Publication"
            className="logo-image"
          />
        </NavLink>
      </div>
      <div className={`menu-link ${showMenu ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setShowMenu(false)}
            >
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setShowMenu(false)}
            >
              Services
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {showMenu ? "✕" : "☰"}
      </div>
    </nav>
  );
}

export default Navbar;

