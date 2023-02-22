import {Link} from "react-router-dom"
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
    <Link to='/'>Home</Link>
    <Link to='/purpose'>Purpose</Link>
    <Link to='/community'>Community</Link>
    <Link to='/careers'>Careers</Link>
    </nav>
  );
};

export default Navbar