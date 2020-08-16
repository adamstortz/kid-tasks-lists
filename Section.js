import React from "react";
import "./Section.css";
import Task from "./Task";

export default ({ name, days, tasks, kid }) => {
  const header = (
    <thead className="thead-light">
      <tr>
        <th className="heading">{name}</th>
        {days.map(day => (
          <th key={`${day.name}`} />
        ))}
      </tr>
    </thead>
  );
  const taskList = (
    <tbody>
      {tasks.map(({ name: taskName, type, tasks }) => (
        <Task
          key={`${kid}-${name}-${taskName}`}
          name={taskName}
          type={type}
          tasks={tasks}
          days={days}
        />
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
