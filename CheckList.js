import React from "react";
import "./CheckList.css";
import Section from "./Section";

export default ({ name, days, sections }) => {
  const headerRow = (
    <tr>
      <th>{name}</th>
      {days.map(day => (
        <th key={`section-day-${day.name}`}>{day.name}</th>
      ))}
    </tr>
  );
  const sectionList = sections.map(({ name, tasks }) => (
    <Section key={`section-${name}`} name={name} days={days} tasks={tasks} />
  ));
  return (
    <div className="row">
      <table className="table">
        <thead className="thead-dark">{headerRow}</thead>
        {sectionList}
      </table>
    </div>
  );
};
