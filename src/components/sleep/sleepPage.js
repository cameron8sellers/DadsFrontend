import React from "react";
import { Card } from "reactstrap";
import "../../components/tips.css";

//import { Link, Redirect } from "react-router-dom";

const SleepPage = props => {
  console.log("sleep props", props);
  const sleepTips = props.tipData.sleep.map((tip, index) => {
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

  return <div>{sleepTips}</div>;
};

export default SleepPage;
