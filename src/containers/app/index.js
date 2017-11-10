import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";
import "../../styles/nav.css";

const App = () => (
  <div>
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
    <header className="masthead clear">
      <div className="centered">
        <div className="site-branding">
          <h1 className="site-title">Twitter Feed</h1>
        </div>
      </div>
    </header>
    <main className="main-area">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
