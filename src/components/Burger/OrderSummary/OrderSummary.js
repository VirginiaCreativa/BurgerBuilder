import React from "react";
import Aux from "./../../../Hoc/Aux.js";
import Button from "./../../UI/Button/Button.js";
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
        <div className={classes.TotalPrice}>
          <p>
            Total Price: <span>${props.price.toFixed(2)}</span>
          </p>
        </div>
        <Button btnType="danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="success" clicked={props.purchaseContinue}>
          CONTINUE
        </Button>
      </div>
    </Aux>
  );
};
export default orderSummary;
