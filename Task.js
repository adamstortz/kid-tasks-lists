import React from "react";
import "./Task.css";

export default ({ name, type, days }) => {
  return (
    <tr>
      <th>{name}</th>
      {days.map(day => (
        <td key={`task-${name}-${day.name}`}>
          <div className={type || "check"} />
        </td>
      ))}
    </tr>
  );
};
