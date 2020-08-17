import React, { useState } from "react";
import { render } from "react-dom";
import CheckList from "./CheckList";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let App = props => {
  library.add(fab, fas);
  const kids = [
    {
      name: "Hannah",
      tasks: [
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
            { name: "Walk" },
            { name: "Train (10 min)" },
            { name: "Screen Time", type: "track" }
          ]
        }
      ],
      school: [
        {
          name: "School",
          tasks: [
            { name: "Handwriting" },
            { name: "Duolingo" },
            { name: "Maps" },
            { name: "Piano" },
            { name: "Latin C" },
            { name: "Rod & Staff" },
            { name: "Math" },
            { name: "History" },
            { name: "Science" },
            { name: "Spelling" },
            { name: "IEW" },
            { name: "LTW" },
            { name: "Typing" },
            { name: "Read To Mom" },
            { name: "Mom Read To You" },
            { name: "Typing" },
            { name: "Logic" }
          ]
        }
      ]
    },
    {
      name: "Maya",
      tasks: [
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
            { name: "Walk" },
            { name: "Train (10 min)" },
            { name: "Screen Time", type: "track" }
          ]
        }
      ],
      school: [
        {
          name: "School",
          tasks: [
            { name: "Duolingo" },
            { name: "Maps" },
            { name: "Piano" },
            { name: "Latin C" },
            { name: "Rod & Staff" },
            { name: "Math" },
            { name: "History" },
            { name: "Science" },
            { name: "Spelling" },
            { name: "Typing" },
            { name: "IEW" }
          ]
        }
      ]
    },
    {
      name: "Kayla",
      tasks: [
        {
          name: "Chores",
          tasks: [
            { name: " Pickup Room " },
            { name: " Shower " },
            { name: " Get Dressed " },
            { name: " Brush Hair " },
            { name: " Brush Teeth " },
            { name: " Take Vitamins " }
          ]
        },
        {
          name: "Dog",
          tasks: [
            { name: "Feed" },
            { name: "Walk" },
            { name: "Train (10 min)" },
            { name: "Screen Time", type: "track" }
          ]
        }
      ],
      school: [
        {
          name: "School",
          tasks: [
            { name: "Handwriting" },
            { name: "Typing" },
            { name: "Maps" },
            { name: "Piano" },
            { name: "Latin" },
            { name: "Rod & Staff" },
            { name: "Flashcards" },
            { name: "Science" },
            { name: "History" },
            { name: "Read to Mom" },
            { name: "Spelling" },
            { name: " Math " }
          ]
        }
      ]
    }
  ];
  const days = [
    { name: "Sun", isSchoolDay: false },
    { name: "Mon" },
    { name: "Tue" },
    { name: "Wed" },
    { name: "Thu" },
    { name: "Fri", isSchoolDay: false },
    { name: "Sat", isSchoolDay: false }
  ];
  const schoolDays = days.filter(day => day.isSchoolDay != false);

  return kids.map(kid => (
    <CheckList
      key={kid.name}
      name={kid.name}
      days={days}
      schoolDays={schoolDays}
      tasks={kid.tasks}
      school={kid.school}
    />
  ));
};

render(<App />, document.getElementById("root"));
