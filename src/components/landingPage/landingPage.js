import React from "react";
//import { Route } from "react-router-dom";
import { Card } from "reactstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./landingPage.css";
const LandingPage = props => {
  console.log("Land Props", props);
  return (
    <div>
      <div className="main_header">
        <h1 className="title"> New Dad's Tips</h1>
      </div>
      <div className="cards-container">
        <a href="/Sleep">
          <Card className="cards" id="sleep-card">
            <h1 className="landing-headings">Sleep </h1>
          </Card>
        </a>
        <Card className="cards" id="health-card">
          <h1 className="landing-headings">Health </h1>
        </Card>
        <Card className="cards" id="home-card">
          <h1 className="landing-headings">At Home </h1>
        </Card>
        <Card className="cards" id="travel-card">
          <h1 className="landing-headings">Travel</h1>
        </Card>
        <Card className="cards" id="tech-card">
          <h1 className="landing-headings">Helpful Tech</h1>
        </Card>
        <Card className="cards" id="recipe-card">
          <h1 className="landing-headings">Recipes</h1>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
