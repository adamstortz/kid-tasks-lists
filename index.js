import React, { useState } from "react";
import { render } from "react-dom";
import CheckList from "./CheckList";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

let App = props => {
  const kids = [
    {
      name: "Hannah",
      sections: [
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
      ]
    }, 
    {
      name: "Maya",
      sections: [
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
      ]
    },
    {
      name:"Kayla",
      sections: [
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
            { name: "Math", tasks: ['+', '-']},
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
      ]
    }
  ];
  const days = [
    { name: "Sunday", isSchoolDay: false }, 
    { name: "Monday" },
    { name: "Tuesday" },
    { name: "Wedday" },
    { name: "Thursday" },
    { name: "Friday" },
    { name: "Saturday", isSchoolDay: false }, 
  ];
  
  return kids.map(kid => (
    <CheckList key={kid.name} name={kid.name} days={days} sections={kid.sections} />
  ));
};

render(<App />, document.getElementById("root"));
