import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";

const App = () => (
  <div>
    <section class="navigation">
      <div class="nav-container">
        <div class="brand">
          <a href="#!">CNN</a>
        </div>
        <nav>
          <div class="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span />
            </a>
          </div>
          <ul class="nav-list">
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
