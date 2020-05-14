import React from "react";
import { Card } from "reactstrap";
import Menu from "../slideMenu";
import "../../components/tips.css";

//import { Link, Redirect } from "react-router-dom";

const RecipePage = props => {
  console.log("recipe props", props);
  const recipeTips = props.tipData.recipes.map((tip, index) => {
    return (
      <Card key={index} className="tipsCards">
        <h3 className="tip=heading">{tip.title}</h3>
        <br />
        <div className="tip-card-div">
          <p className="tip-paragraph">Difficulty: {tip.difficulty}</p>
          <p>{tip.link}</p>
        </div>
      </Card>
    );
  });

  return (
    <div>
      <div className="tips_header">
        <h1 className="title"> New Dad's Tips</h1>
        <Menu />
      </div>
      <div className="cards-container">{recipeTips}</div>
    </div>
  );
};

export default RecipePage;
