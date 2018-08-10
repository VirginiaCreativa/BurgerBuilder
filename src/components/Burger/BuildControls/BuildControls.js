import React from "react";
import classes from "./BuildControls.scss";
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
        />
      );
    })}
  </div>
);
export default buildControls;
