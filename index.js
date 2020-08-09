import React, { useState } from "react";
import { render } from "react-dom";
import CheckList from "./CheckList";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

let App = props => {
  const kids = ["Hannah"];
  const days = [{ name: "Sunday" }, { name: "Monday", isSchoolDay: false }];
  const sections = [
    {name: 'Chores', tasks: [{name: 'a'}]},
    {name: 'Dog', tasks: [{name: 'b'}]},
    {name: 'School', tasks: [{name: 'foo', type: 'track'}]},
  ];
  return kids.map(kid => (
    <CheckList key={kid} name={kid} days={days} sections={sections} />
  ));
};

render(<App />, document.getElementById("root"));
