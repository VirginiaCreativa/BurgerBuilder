import React from "react";
import classes from "./Navigationitems.scss";
import Navigationitem from "./NavigationItem/Navigationitem.js";

const navigationItems = props => (
  <ul className={[classes.Navigationitems, "list-unstyled"].join(" ")}>
    <Navigationitem link="/" active>
      Home
    </Navigationitem>
    <Navigationitem link="/">Contact</Navigationitem>
  </ul>
);
export default navigationItems;
