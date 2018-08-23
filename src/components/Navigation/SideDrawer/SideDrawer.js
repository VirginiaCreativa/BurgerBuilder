import React from "react";
import classes from "./SideDrawer.scss";
import Logo from "./../../Logo/Logo.js";
import Navs from "./../Navs/Navs.js";
import Backgrop from "./../../UI/Backgrop/Backgrop.js";
import Aux from "./../../../Hoc/Aux/Aux.js";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backgrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div className={classes.Nav}>
          <Navs />
        </div>
      </div>
    </Aux>
  );
};
export default sideDrawer;
