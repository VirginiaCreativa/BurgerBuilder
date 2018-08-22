import React from "react";
import Aux from "./../../Hoc/Aux.js";
import classes from "./Layout.scss";
import Toolbar from "./../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "./../SideDrawer/SideDrawer.js";
const Layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Wrapper}>{props.children}</main>
  </Aux>
);
export default Layout;
