import React, { Component } from "react";
import Aux from "./../../Hoc/Aux.js";
import Burger from "./../../components/Burger/Burger.js";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls.js";

const INGREDIENT_PRICES = {
  bacon: 1,
  salad: 0.5,
  cheese: 0.8,
  meat: 1.4,
  onion: 0.2,
  tomats: 0.2,
  ketchup: 0.1,
  mayonnaise: 0.1,
  mustard: 0.1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad: 0,
      cheese: 0,
      meat: 0,
      onion: 0,
      tomats: 0,
      ketchup: 0,
      mayonnaise: 0,
      mustard: 0
    },
    totalPrice: 4
  };
  AddIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updatedCount;
    const priceAdditon = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdditon;

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };
  RemoveIngredientHandler = type => {};
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.AddIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
