import React from "react";
import { Route } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Nav from "../../components/nav";
import Header from "../../components/header";

const App = () => (
  <div>
    <Nav />
    <Header />
    <main className="main-area">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
