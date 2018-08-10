import React from "react";
import classes from "./BuildControl.scss";

const buildControl = props => (
  <div className={classes.CockpitControl}>
    <label>{props.label}: </label>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.added}>
      More
    </button>
  </div>
);
export default buildControl;
