import React from "react";
import "./TaskRow.css";
import Task from "./Task";

export default ({ name, type, groupType, days, tasks }) => {
  const taskColumns = days.map((day, index) => (
    <td className="padding-0" key={`task-${name}-${day.name}`}>
      <Task
        name={name}
        type={type}
        days={days}
        tasks={tasks}
        task={groupType == "spread" ? tasks[index] : null}
      />
    </td>
  ));

  return (
    <tr>
      <th className="padding-0 task-name">{name}</th>
      {taskColumns}
    </tr>
  );
};
