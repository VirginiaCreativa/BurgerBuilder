import React, { Component } from "react";
import classes from "./Modal.scss";
import Aux from "./../../../Hoc/Aux/Aux.js";
import Backgrop from "./../Backgrop/Backgrop.js";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <Aux>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show
              ? "translate(100%, 0%)"
              : "translate(100%, -100%)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
        <Backgrop show={this.props.show} clicked={this.props.modalClosed} />
      </Aux>
    );
  }
}
export default Modal;
