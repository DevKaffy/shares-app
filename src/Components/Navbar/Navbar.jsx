import {Link} from "react-router-dom"
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
    <Link to='/'><img src="/logo.svg" alt=""/></Link>
      </div>
    <div className="nav-items">
    <Link to='/purpose'>Purpose</Link>
    <Link to='/community'>Community</Link>
    <Link to='/careers'>Careers <sup>(11)</sup></Link>
    <Link to='/learn'>Learn</Link>
    <button className= "nav-button">
      <img src="/location.svg" alt="" />
      <span>United Kingdom</span>
    </button>
    </div>
    </nav>
  );
};

export default Navbar