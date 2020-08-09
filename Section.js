import React from "react";
import "./Section.css";
import Task from "./Task";

export default ({ name, days, tasks }) => {
  const header = (
    <thead className="thead-light">
      <tr>
        <th class="heading">{name}</th>
        {days.map(day => (
          <th />
        ))}
      </tr>
    </thead>
  );
  const taskList = (
    <tbody>
      {tasks.map(({ name, type }) => (
        <Task name={name} type={type} days={days} />
      ))}
    </tbody>
  );
  return (
    <>
      {header}
      {taskList}
    </>
  );
};
