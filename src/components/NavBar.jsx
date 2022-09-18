import React from "react";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <input type="checkbox"  id="active" />
      <label htmlFor="active" className="menu-btn"> <i className="fas fa-bars"></i></label>
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/download">Download CV</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/lab">Lab</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
