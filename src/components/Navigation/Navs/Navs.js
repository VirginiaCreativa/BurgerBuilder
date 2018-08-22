import React from "react";
import classes from "./Navs.scss";
import NavItem from "./NavItem/NavItem.js";
const navs = props => (
  <ul className={classes.Navs}>
    <NavItem link="/" active>
      Home
    </NavItem>
    <NavItem link="/ckeckout">Ckeckout</NavItem>
  </ul>
);
export default navs;
