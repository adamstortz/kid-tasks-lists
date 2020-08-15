import React from "react";
import "./Task.css";

export default ({ name, type, days, tasks }) => {
  const taskDetail =
    tasks && tasks.length > 0 ? (
      <ul className="list-group-flush">
        {tasks.map(task => (
          <li className="list-group-item d-flex">
            <span className={type || "check"} />
            <span className="task-detail">{task}</span>
          </li>
        ))}
      </ul>
    ) : (
      <ul className="list-group-flush"><li className="list-group-item d-flex"><div className={type || "check"} /></li></ul>
    );
  return (
    <tr>
      <th>{name}</th>
      {days.map(day => (
        <td key={`task-${name}-${day.name}`}>{taskDetail}</td>
      ))}
    </tr>
  );
};
