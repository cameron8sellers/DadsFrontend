import React from "react";

import APIdata from "./SeedData/seed";
import Main from "./main";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Main tipData={APIdata} />
    </div>
  );
}

export default App;
