import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import TipPage from "./components/tipPage/tipPage";
import APIdata from "./SeedData/seed";
import SleepPage from "./components/sleep/sleepPage";
import TechPage from "./components/tech/techPage";
import HealthPage from "./components/health/healthPage";
import HomePage from "./components/home/homeLifePage";
import TravelPage from "./components/travel/travelPage";
import RecipePage from "./components/recipes/recipesPage";
import "./App.css";

function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route
        path="/Sleep"
        render={props => <SleepPage {...props} tipData={APIdata} />}
      />
      <Route
        path="/Tech"
        render={props => <TechPage {...props} tipData={APIdata} />}
      />
      <Route
        path="/Health"
        render={props => <HealthPage {...props} tipData={APIdata} />}
      />
      <Route
        path="/Home_Life"
        render={props => <HomePage {...props} tipData={APIdata} />}
      />
      <Route
        path="/Travel"
        render={props => <TravelPage {...props} tipData={APIdata} />}
      />
      <Route
        path="/Recipes"
        render={props => <RecipePage {...props} tipData={APIdata} />}
      />

      <Route
        path="/Tips/:title"
        render={props => <TipPage tipData={APIdata} {...props} />}
      />
    </Switch>
  );
}

export default App;
