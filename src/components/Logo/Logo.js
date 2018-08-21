import React from "react";
import classes from "./Logo.scss";
import BurgerLogo from "./../../assets/logo/burger.svg";

const logo = props => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="Logo Burger" />
    <h4>BURGER+BUILDER</h4>
  </div>
);
export default logo;
