import React from "react";
import classes from "./BuildControls.scss";
import { Button } from "reactstrap";
import BuildControl from "./BuildControl/BuildControl.js";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Onion", type: "onion" },
  { label: "Tomats", type: "tomats" },
  { label: "ketchup", type: "ketchup" },
  { label: "Mustard", type: "mustard" },
  { label: "Mayonnaise", type: "mayonnaise" }
];
const buildControls = props => (
  <div className={classes.CockpitControls}>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <div className={classes.totalPrice}>
      <p className={classes.titlePrice}>Current Price:</p>
      <p className={classes.responPrice}>$ {props.price.toFixed(1)}</p>
    </div>
    <Button
      color="success"
      size="lg"
      block
      className={classes.BtnOrder}
      disabled={!props.purchasable}
    >
      ORDER NOW
    </Button>
  </div>
);
export default buildControls;
