import React from "react";
import classes from "./BuildControl.scss";

const buildControl = props => (
  <div className={classes.CockpitControl}>
    <label>{props.label}: </label>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);
export default buildControl;
