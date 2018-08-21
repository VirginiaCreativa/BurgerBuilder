import React from "react";
import classes from "./NavigationItem.scss";

const navigationItem = props => (
  <li className={classes.Navigationitem}>
    <a
      href="/"
      onClick={props.link}
      className={props.active ? classes.active : null}
    >
      {props.children}
    </a>
  </li>
);
export default navigationItem;
