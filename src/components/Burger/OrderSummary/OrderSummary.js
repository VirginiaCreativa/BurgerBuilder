import React, { Component } from "react";
import Aux from "./../../../Hoc/Aux/Aux.js";
import Button from "./../../UI/Button/Button.js";
import classes from "./OrderSummary.scss";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span className={classes.Title}>{igKey}:</span>
          <span className={classes.Number}>
            {this.props.ingredients[igKey]}
          </span>
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
              Total Price: <span>${this.props.price.toFixed(2)}</span>
            </p>
          </div>
          <Button btnType="danger" clicked={this.props.purchaseCancelled}>
            CANCEL
          </Button>
          <Button btnType="success" clicked={this.props.purchaseContinue}>
            CONTINUE
          </Button>
        </div>
      </Aux>
    );
  }
}
export default OrderSummary;
