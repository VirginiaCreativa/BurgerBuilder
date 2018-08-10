import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient.js";
import classes from "./Burger.scss";

const burger = props => {
  const transformIngredients = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients[ingKey])].map((_, i) => {
      return <BurgerIngredient key={ingKey + i} type={ingKey} />;
    });
  });
  return (
    <div>
      <div className={classes.ContentBurger}>
        <BurgerIngredient type="bread-top" />
        {transformIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </div>
  );
};
export default burger;
