import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import TipPage from "./components/tipPage/tipPage";
import APIdata from "./SeedData/seed";
import SleepPage from "./components/sleep/sleepPage";

function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          path="/Sleep"
          render={props => <SleepPage {...props} tipData={APIdata} />}
        />

        <Route
          path="/Tips/:title"
          render={props => <TipPage tipData={APIdata} {...props} />}
        />
      </Switch>
    </main>
  );
}

export default Main;
