import {Link} from "react-router-dom"
import React from 'react'
import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={colorChange ? 'navbar-scroll' : 'navbar colorChange' }>
      <div className="nav-logo">
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>
      </div>
      <div className="nav-items">
        <Link to="/purpose">Purpose</Link>
        <Link to="/community">Community</Link>
        <Link to="/careers">
          Careers <sup>(11)</sup>
        </Link>
        <Link to="/learn">Learn</Link>
        <button className="nav-button">
          <img src="/location.svg" alt="" />
          <span>United Kingdom</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar