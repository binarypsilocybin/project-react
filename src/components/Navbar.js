import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nabvar-wrapper">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            React training
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/several-projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Several Projects <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link
                to="/project"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/another-project"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Another Project
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
