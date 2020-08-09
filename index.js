import React, { useState } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

let App = props => {
  const state = {
    kids: ["Hannah", "Maya", "Kayla"],
    tasks: {
      Chores: [],
      Dog: [],
      School: []
    }
  };

  let headerRow = <tr>
    <th/>
    {state.kids.map(kid => {
      return <th key={kid}>{kid}</th>;
    })}
  </tr>;
  return (
    <div class="row">
      <table class="table">
        <thead class="thead-dark">
          {headerRow}
        </thead>
        <thead className="thead-light">
          <tr>
            <th class="heading">Chores</th>
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Pickup Room</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Shower</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Get Dressed</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Brush Hair</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Brush Teeth</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Take Vitamins</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Bring down Laundry</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Chores</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
        </tbody>
        <thead class="thead-light">
          <tr>
            <th class="heading">Dog</th>
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Feed</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Walk</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Train (10 min)</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
        </tbody>
        <thead class="thead-light">
          <tr>
            <th class="heading">School</th>
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Done before lunch</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Recess/PE</th>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
            <td>
              <div class="box" />
            </td>
          </tr>
          <tr>
            <th>Screen Time</th>
            <td>
              <div class="wide-box" />
            </td>
            <td>
              <div class="wide-box" />
            </td>
            <td>
              <div class="wide-box" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

render(<App />, document.getElementById("root"));
