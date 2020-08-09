import React from "react";
import "./CheckList.css";
import Section from "./Section";

export default ({ name, days, sections }) => {
  const headerRow = (
    <tr>
      <th>{name}</th>
      {days.map(day => (
        <th>{day.name}</th>
      ))}
    </tr>
  );
  const sectionList = sections.map(({ name, tasks }) => (
    <Section name={name} days={days} tasks={tasks} />
  ));
  return (
    <div class="row">
      <table class="table">
        <thead class="thead-dark">{headerRow}</thead>
        {sectionList}
      </table>
    </div>
  );
};
