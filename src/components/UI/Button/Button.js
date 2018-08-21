import React from "react";
import classes from "./Button.scss";
import { Button } from "reactstrap";

const button = props => (
  <Button
    onClick={props.clicked}
    color={props.btnType}
    className={[classes.Button].join(" ")}
  >
    {props.children}
  </Button>
);
export default button;
