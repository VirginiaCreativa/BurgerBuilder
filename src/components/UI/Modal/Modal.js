import React from "react";
import classes from "./Modal.scss";
import Aux from "./../../../Hoc/Aux.js";
import Backgrop from "./../Backgrop/Backgrop.js";

const modal = props => (
  <Aux>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translate(25%, 50%)" : "translate(0, -100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
    <Backgrop show={props.show} clicked={props.modalClosed} />
  </Aux>
);
export default modal;
