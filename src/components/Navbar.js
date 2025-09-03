import React from "react";
import { Link } from "react-scroll"; 
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        C.
      </div>
      <div className="nav-links">
        <Link to="about" smooth={true} duration={500} offset={-60}>
          About
        </Link>
        <Link to="experience" smooth={true} duration={500} offset={-60}>
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-60}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-60}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
