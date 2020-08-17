import React from "react";
import "./CheckList.css";
import Section from "./Section";

export default ({ name, days, schoolDays, tasks, school }) => {
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
  const schoolHeaderRow = (
    <tr>
      <th>{name}</th>
      {schoolDays.map(day => (
        <th className="day" key={`section-day-${day.name}`}>
          {day.name}
        </th>
      ))}
    </tr>
  );
  const sectionList = tasks.map(({ name: sectionName, tasks }) => (
    <Section
      key={`section-${sectionName}`}
      name={sectionName}
      days={days}
      tasks={tasks}
      kid={name}
    />
  ));
  const schoolSectionList = school.map(({ name: sectionName, tasks }) => (
    <Section
      key={`section-${sectionName}`}
      name={sectionName}
      days={schoolDays}
      tasks={tasks}
      kid={name}
    />
  ));
  return (
    <>
      <table className="table table-sm table-borderless table-striped">
        <thead className="thead-dark">{headerRow}</thead>
        {sectionList}
      </table>
      <table className="table table-sm table-borderless table-striped">
        <thead className="thead-dark">{schoolHeaderRow}</thead>
        {schoolSectionList}
      </table>
    </>
  );
};
