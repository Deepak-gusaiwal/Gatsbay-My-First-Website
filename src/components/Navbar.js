import { Link } from "gatsby";
import React from "react";
import { logo,navContainer } from "../components/style.module.css";
const Navbar = () => {
  return (
    <nav className={navContainer} >
      <span className={logo}>LOGO</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
