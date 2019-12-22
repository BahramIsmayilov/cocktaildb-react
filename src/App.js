import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
//import Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
