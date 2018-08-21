import React from "react";
import Aux from "./../../Hoc/Aux.js";
import classes from "./Layout.scss";
import Toolbar from "./../Navigation/Toolbar/Toolbar.js";

const Layout = props => (
  <Aux>
    <Toolbar />
    <main className={classes.Wrapper}>{props.children}</main>
  </Aux>
);
export default Layout;
