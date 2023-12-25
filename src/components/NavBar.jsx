import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">User App</div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/users" className="nav-item">
            Users
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/posts" className="nav-item">
            Posts
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
