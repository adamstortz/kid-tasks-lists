import React, { useState } from "react";
import { render } from "react-dom";
import CheckList from "./CheckList";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

let App = props => {
  const kids = ["Hannah", "Maya"];
  const days = [{ name: "Sunday" }, { name: "Monday", isSchoolDay: false }];
  const sections = [
    { 
      name: "Chores", 
      tasks: [
        { name: "walk" }
      ] 
    },
    { 
      name: "Dog", 
      tasks: [
        { name: "Train" }
      ] 
    },
    { 
      name: "School", 
      tasks: [
        { name: "foos" },
        { name: "food", type: "track" }
      ] 
    }
  ];
  return kids.map(kid => (
    <CheckList key={kid} name={kid} days={days} sections={sections} />
  ));
};

render(<App />, document.getElementById("root"));
