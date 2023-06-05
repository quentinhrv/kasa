import React from "react";
import { NavLink } from "react-router-dom";
import './_navbar.scss';

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="navbar">
        Accueil
      </NavLink>
      <NavLink to="/about" className="navbar">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Navbar;