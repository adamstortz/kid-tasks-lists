import React, { useState } from "react";
import { render } from "react-dom";
import CheckList from "./CheckList";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

let App = props => {
  const kids = ["Hannah", "Maya" ,"Kayla"];
  const days = [{ name: "Sunday" }, { name: "Monday", isSchoolDay: false }];
  const sections = [
    { 
      name: "Chores", 
      tasks: [
        { name: "Pickup Room" },
        { name: "Shower" },
        { name: "Get Dressed" },
        { name: "Brush Hair" },
        { name: "Brush Teeth" },
        { name: "Take Vitamins" },
        { name: "Chores" },
        { name: "Mop" }      
      ] 
    },
    { 
      name: "Dog", 
      tasks: [
        { name: "Feed" },
        { name: "Walk" } ,      
        { name: "Train (10 min)" }    
      ]
    },{                        
      name: "School", 
      tasks: [
        { name: "Handwriting" },
        { name: "Duolingo"},
        { name: "Maps"},
        { name: "Piano"},
        { name: "Latin C"},
        { name: "Rod & Staff"},
        { name: "Math"},
        { name: "History"},
        { name: "Science"},
        { name: "Spelling"},
        { name: "IEW"},
        { name: "LTW"},
        { name: "Typing"},
        { name: "Read To Mom"},
        { name: "Mom Read To You"},
        { name: "Typing"},
        { name: "Logic"},
        { name: "Screen Time", type: "track" }
      ] 
    }
  ];
  return kids.map(kid => (
    <CheckList key={kid} name={kid} days={days} sections={sections} />
  ));
};

render(<App />, document.getElementById("root"));
