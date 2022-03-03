import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo_octane_rond.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="NavBar">
      <ul className="liste">
        <Link to="./">
          <img src={logo} alt="logotest" className="navbar-logo" />
        </Link>
        <li className="items">
          <Link to="/Capvert">Blog</Link>
        </li>

        <li className="items">
          <Link to="/Signup">Inscription</Link>
        </li>
        <li className="items">
          <Link to="/Login">Connexion</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
