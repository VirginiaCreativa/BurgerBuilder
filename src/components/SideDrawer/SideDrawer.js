import React from "react";
import classes from "./SideDrawer.scss";
import Logo from "./../Logo/Logo.js";
import Navs from "./../Navigation/Navs/Navs.js";

const sideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <Logo />

      <Navs />
    </div>
  );
};
export default sideDrawer;