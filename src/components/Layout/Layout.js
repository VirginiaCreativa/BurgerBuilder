import React from "react";
import Aux from "./../../Hoc/Aux";
import classes from "./Layout.scss";

const Layout = props => (
  <Aux>
    <div>Toolbar, SideDrawe, Backgrop</div>
    <main className={classes.Wrapper}>{props.children}</main>
  </Aux>
);
export default Layout;
