import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient.js";
import { Container, Row, Col } from "reactstrap";
import classes from "./Burger.scss";

const burger = props => {
  let transformIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = (
      <h2 className={classes.Warning}>Please start adding ingredients!</h2>
    );
  }
  return (
    <Container>
      <div className={classes.ContentBurger}>
        <BurgerIngredient type="bread-top" />
        {transformIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </Container>
  );
};
export default burger;
