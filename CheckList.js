import React from "react";
import "./CheckList.css";
import Section from "./Section";

export default ({ name, days, sections }) => {
  const headerRow = (
    <tr>
      <th>{name}</th>
      {days.map(day => (
        <th className="day" key={`section-day-${day.name}`}>
          {day.name}
        </th>
      ))}
    </tr>
  );
  const sectionList = sections.map(({ name: sectionName, tasks }) => (
    <Section key={`section-${sectionName}`} name={sectionName} days={days} tasks={tasks}  kid={name}/>
  ));
  return (
    <table className="table table-sm table-striped">
      <thead className="thead-dark">{headerRow}</thead>
      {sectionList}
    </table>
  );
};
