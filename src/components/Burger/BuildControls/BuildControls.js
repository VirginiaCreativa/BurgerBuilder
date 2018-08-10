import React from "react";
import classes from "./BuildControls.scss";
import BuildControl from "./BuildControl/BuildControl.js";

const buildControls = props => (
  <div className={classes.CockpitControls}>
    <BuildControl />
  </div>
);
export default buildControls;
