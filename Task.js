import React from "react";
import "./Task.css";

export default ({ name, type, days, tasks }) => {
  const taskDetail =
    tasks && tasks.length > 0 ? (
      <ul className="list-group-flush padding-0">
        {tasks.map(task => (
          <li key={`${name}-${type || 'check'}-${task}`} className="list-group-item d-flex padding-0">
            <span className={["padding-0", type || "check"].join(' ')} />
            <span className="task-detail">{task}</span>
          </li>
        ))}
      </ul>
    ) : (
      <ul className="list-group-flush padding-0"><li className="list-group-item d-flex"><div className={type || "check"} /></li></ul>
    );
  return (
    <tr>
      <th className="padding-0 task-name">{name}</th>
      {days.map(day => (
        <td className="padding-0" key={`task-${name}-${day.name}`}>{taskDetail}</td>
      ))}
    </tr>
  );
};
