import React from "react";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./landingPage.css";
const LandingPage = () => {
  return (
    <div>
      <div>
        <h1 className="main_header"> New Dads</h1>
        <div>
          <FontAwesomeIcon icon="Cookie-Bite" />
        </div>
      </div>
      <Card className="cards" id="sleep-card">
        <h1 className="landing-headings">Sleep</h1>
      </Card>
      <Card className="cards" id="health-card">
        <h1 className="landing-headings">Health</h1>
      </Card>
      <Card className="cards" id="home-card">
        <h1 className="landing-headings">At Home</h1>
      </Card>
      <Card className="cards" id="travel-card">
        <h1 className="landing-headings">Travel</h1>
      </Card>
      <Card className="cards" id="tech-card">
        <h1 className="landing-headings">Helpful Tech</h1>
      </Card>
      <Card className="cards" id="wish-card">
        <h1 className="landing-headings">What I Wish I Knew</h1>
      </Card>
      <Card className="cards" id="recipe-card">
        <h1 className="landing-headings">Recipes</h1>
      </Card>
    </div>
  );
};

export default LandingPage;
