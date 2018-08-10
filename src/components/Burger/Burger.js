import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient.js";
import classes from "./Burger.scss";
const burger = props => {
  return (
    <div>
      <div className={classes.ContentBurger}>
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="mustard" />
        <BurgerIngredient type="mayonnaise" />
        <BurgerIngredient type="tomatos" />
        <BurgerIngredient type="onion" />
        <BurgerIngredient type="bacon" />
        <BurgerIngredient type="salad" />
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type="meat" />
        <BurgerIngredient type="ketchup" />
        <BurgerIngredient type="bread-bottom" />
      </div>
    </div>
  );
};
export default burger;
