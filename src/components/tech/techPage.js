import React from "react";
import { Card } from "reactstrap";
import "../../components/tips.css";
import Menu from "../slideMenu";

//import { Link, Redirect } from "react-router-dom";

const TechPage = props => {
  console.log("tech props", props);
  const techTips = props.tipData.tech.map((tip, index) => {
    return (
      <Card key={index} className="tipsCards">
        <h3 className="tip=heading">{tip.title}</h3>
        <br />
        <div className="tip-card-div">
          <p className="tip-paragraph">{tip.content}</p>
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
      <div className="cards-container">{techTips}</div>
    </div>
  );
};

export default TechPage;
