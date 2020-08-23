import React from "react";
import "./Task.css";

export default ({ name, type, days, tasks, task }) => {
  if (task) {
    return (
      <ul className="list-group-flush padding-0">
        <li
          key={`${name}-${type || "check"}-${task}`}
          className="list-group-item d-flex padding-0"
        >
          <span className={["padding-0", type || "check"].join(" ")} />
          <span className="task-detail">{task}</span>
        </li>
      </ul>
    );
  } else if (tasks && tasks.length > 0) { 
    return (<ul className="list-group-flush padding-0">
      {tasks.map(task => (
        <li
          key={`${name}-${type || "check"}-${task}`}
          className="list-group-item d-flex padding-0"
        >
          <span className={["padding-0", type || "check"].join(" ")} />
          <span className="task-detail">{task}</span>
        </li>
      ))}
    </ul>);
  }
  return (
    <ul className="list-group-flush padding-0">
      <li className="list-group-item d-flex">
        <div className={type || "check"} />
      </li>
    </ul>)
  ;
};
