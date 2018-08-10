import React, { Component } from "react";
import Aux from "./../../Hoc/Aux.js";
import Burger from "./../../components/Burger/Burger.js";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls.js";

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
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
