import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCheckSquare,
  faCoffee,
  faCookieBite
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
library.add(faCheckSquare, faCoffee, faCookieBite);

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
    </div>
  );
}

export default App;
