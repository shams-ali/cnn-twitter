import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";

/* <header>
<Link to="/">Home</Link>
<Link to="/about-us">About</Link>
</header> */

const App = () => (
  <div>
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
