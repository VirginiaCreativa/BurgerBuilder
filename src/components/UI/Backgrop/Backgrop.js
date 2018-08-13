import React from "react";
import classes from "./Backgrop.scss";

const backgrop = props =>
  props.show ? (
    <div className={classes.Backgrop} onClick={props.clicked} />
  ) : null;
export default backgrop;
