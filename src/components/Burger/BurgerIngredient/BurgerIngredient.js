import React from "react";
import classes from "./BurgerIngredient.scss";

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
          <div className={classes.Seeds3} />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat} />;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese} />;
      break;
    case "salad":
      ingredient = <div className={classes.Salad} />;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon} />;
      break;
    case "onion":
      ingredient = <div className={classes.Onion} />;
      break;
    case "tomatos":
      ingredient = (
        <div className={classes.Tomatos}>
          <div className={classes.Tomato1} />
          <div className={classes.Tomato2} />
        </div>
      );
      break;
    case "ketchup":
      ingredient = (
        <div className={classes.Ketchup}>
          <div className={classes.Drop1} />
          <div className={classes.Drop2} />
        </div>
      );
      break;
    case "mustard":
      ingredient = (
        <div className={classes.Mustard}>
          <div className={classes.Drop1} />
          <div className={classes.Drop2} />
        </div>
      );
      break;
    case "mayonnaise":
      ingredient = (
        <div className={classes.Mayonnaise}>
          <div className={classes.Drop1} />
          <div className={classes.Drop2} />
        </div>
      );
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};
export default burgerIngredient;
