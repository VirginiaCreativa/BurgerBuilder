import React from "react";
import Aux from "./../../../Hoc/Aux.js";
import { Button } from "reactstrap";
import classes from "./OrderSummary.scss";

const orderSummary = props => {
  let ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span className={classes.Title}>{igKey}:</span>
        <span className={classes.Number}>{props.ingredients[igKey]}</span>
      </li>
    );
  });
  return (
    <Aux>
      <div className={classes.OrderSummary}>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul className="list-unstyled">{ingredientSummary}</ul>

        <Button color="danger">Cancel</Button>
        <Button color="success">Continue</Button>
      </div>
    </Aux>
  );
};
export default orderSummary;
