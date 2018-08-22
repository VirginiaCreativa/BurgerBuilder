import React from "react";
import classes from "./DrawerToggle.scss";

const drawerToggle = props => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <i className="fas fa-bars" />
  </div>
);

export default drawerToggle;
