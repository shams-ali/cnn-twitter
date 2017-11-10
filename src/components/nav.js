import React from "react";
import { Link } from "react-router-dom";
import "sanitize.css/sanitize.css";
import "../styles/nav.css";

const Nav = () => (
  <section className="navigation">
    <div className="nav-container">
      <div className="brand">
        <a href="#!">CNN</a>
      </div>
      <nav>
        <div className="nav-mobile">
          <a id="nav-toggle" href="#!">
            <span />
          </a>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default Nav;
