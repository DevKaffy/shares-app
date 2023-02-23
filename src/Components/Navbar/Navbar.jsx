import {Link} from "react-router-dom"
import React from 'react'
import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
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
    <nav className={colorChange ? "navbar-scroll" : "colorChange"}>
      <div className="inner-nav">
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
        {/* Mobile Tab */}
        <div>
          <div
            className=" lg:hidden"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <img className="w-8 h-8" src="/menu.svg" alt="" />
          </div>
          <div
            className={`absolute grid ${
              showNavbar ? "right-4" : "-right-[10rem]"
            } h-60 w-24 top-20 transition-all duration-150`}
          >
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar