import React from "react";
import "./Task.css";

export default ({ name, type, days }) => {
  return (
    <tr>
      <th>{name}</th>
      {days.map(day => (
        <td>
          <div className={type || "check"} />
        </td>
      ))}
    </tr>
  );
};
