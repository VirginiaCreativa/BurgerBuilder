import React from "react";
import Aux from "./../../../Hoc/Aux.js";
import { Button } from "reactstrap";

const orderSummary = props => {
  let ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <Button color="success" size="lg" block>
        <i className="fas fa-fw fa-shopping-cart" />
        Continue to Checkout
      </Button>
    </Aux>
  );
};
export default orderSummary;
