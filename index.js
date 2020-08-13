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
        { name: "Pickup Room" }
        { name: "Shower" }
        { name: "Get Dressed" }
        { name: "Brush Hair" }
        { name: "Brush Teeth" }
        { name: "Take Vitamins" }
        { name: "Chores" }
        { name: "Mop" }      
      ] 
    },
    { 
      name: "Dog", 
      tasks: [
        { name: "Feed" }
        { name: "Walk" }       
        { name: "Train (10 min)" }                            
      name: "School", 
      tasks: [
        { name: "Handwriting" },
        { name: "Duolingo"}
        { name: "Maps"}
        { name: "Piano"}
        { name: "Latin"}
        { name: "Rod & Staff"}
        { name: "Math"}
        { name: "History"}
        { name: "Science"}
        { name: "Spelling"}
        { name: "IEW"}
        { name: "LTW"}
        { name: "Typing"}
        { name: ""}
        { name: "food", type: "track" }
      ] 
    }
  ];
  return kids.map(kid => (
    <CheckList key={kid} name={kid} days={days} sections={sections} />
  ));
};

render(<App />, document.getElementById("root"));
