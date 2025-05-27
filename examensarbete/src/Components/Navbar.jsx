import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-links left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="navbar-logo">No38</div>

      <ul className="navbar-links right">
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
