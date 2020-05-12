import React from "react";
import { Card } from "reactstrap";

import "./landingPage.css";
const LandingPage = () => {
  return (
    <div>
      <div>
        <h1 className="main_header"> New Dads</h1>
      </div>
      <Card className="cards">
        <h1>Sleep</h1>
      </Card>
      <Card className="cards">
        <h1>Health</h1>
      </Card>
      <Card className="cards">
        <h1>At Home</h1>
      </Card>
      <Card className="cards">
        <h1>Nutrition</h1>
      </Card>
      <Card className="cards">
        <h1>Travel</h1>
      </Card>
      <Card className="cards">
        <h1>Helpful Tech</h1>
      </Card>
      <Card className="cards">
        <h1>What I Wish I Knew</h1>
      </Card>
      <Card className="cards">
        <h1>Recipes</h1>
      </Card>
    </div>
  );
};

export default LandingPage;
