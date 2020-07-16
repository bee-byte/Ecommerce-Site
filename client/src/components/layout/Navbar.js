import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://i.postimg.cc/L6Q45VT9/logo-story-volkswagen.jpg"
        alt=""
      />
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Shopping Cart">Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
