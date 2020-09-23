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
            { name: "Pickup Room"},
            { name: "Shower"},
            { name: "Get Dressed"},
            { name: "Brush Hair"},
            { name: "Brush Teeth"},
            { name: "Take Vitamins"},
            { name: "Chores"},
            { name: "Mop"},
            { name: "Bring down lauandry"},
          ]
        },
        {
          name: "Dog",
          tasks: [
            { name: "Feed"},
            { name: "Walk"},
            { name: "Train (10 min)"}
              ]
        },
        {
          name: "School",
          tasks: [
            { name: "Recess (30 min)"},
            { name: "Piano"},
            { name: "Screen Time", type: "track"}
          ]
        }
      ],
      school: [
        {
          name: "School",
          tasks: [
            { name: "Duolingo"},
            { name: "History"},
            { name: "Latin C"},
            { name: "Logic"},
            { name: "LTW"},
            { name: "Maps"},
            { name: "Math"},
            {
              name: "Flashcards",
              tasks: [
                <FontAwesomeIcon icon="divide" />,
                <FontAwesomeIcon icon="times" />,
                <FontAwesomeIcon icon="minus" />,
                <FontAwesomeIcon icon="plus" />
              ],
              groupType: "spread"
            },

            { name: "Read Bible"},
            { name: "Rod & Staff"},
            { name: "Science"},
            { name: "Typing"}
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
            { name: "Pickup Room"},
            { name: "Shower"},
            { name: "Get Dressed"},
            { name: "Brush Hair"},
            { name: "Brush Teeth"},
            { name: "Take Vitamins"},
            { name: "Chores"},
            { name: "Mop"},
            { name: "Bring down lauandry"}

          ]
        },
        {
          name: "Dog",
          tasks: [
            { name: "Feed" },
            { name: "Walk" },
            { name: "Train (10 min)" },
              ]
        },
        {
          name: "School",
          tasks: [
            { name: "Done before lunch" },
            { name: "Recess (30 min)" },
            { name: "Piano" },
            { name: "Screen Time", type: "track" }
          ]
        }
      ],
      school: [
        {
          name: "School",
          tasks: [
            { name: "Duolingo" },
            { name: "History" },
            { name: "Latin C" },
            { name: "IEW" },
            { name: "Maps" },
            { name: "Math" },
            {
              name: "Flashcards",
              tasks: [
                <FontAwesomeIcon icon="divide" />,
                <FontAwesomeIcon icon="times" />,
                <FontAwesomeIcon icon="minus" />,
                <FontAwesomeIcon icon="plus" />
              ],
              groupType: "spread"
            },
            { name: "Read Bible"},
            { name: "Rod & Staff"},
            { name: "Science"},
            { name: "Spelling"},
            { name: "Typing"}
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
            { name: "Pickup Room"},
            { name: "Shower"},
            { name: "Get Dressed"},
            { name: "Brush Hair"},
            { name: "Brush Teeth"},
            { name: "Take Vitamins"},
            { name: "Bring down lauandry"}
          ]
        },
        {
          name: "Dog",
          tasks: [
            { name: "Feed"},
            { name: "Walk"},
            { name: "Train (10 min)"}
          ]
        },
        {
          name: "School",
          tasks: [
            { name: "Done before lunch" },
            { name: "Recess (30 min)" },
            { name: "Piano" },
            { name: "Screen Time", type: "track" }
          ]
        }
      ],
      school: [
        {
          name: "School",
          tasks: [
            { name: "Handwriting" },
            { name: "History" },
            { name: "Latin" },
            { name: "Maps" },
            { name: "Math" },
            { name: "Read to Mom" },
            { name: "Rod & Staff" },
            { name: "Science" },
            { name: "Spelling" },
            { name: "Typing" }
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
