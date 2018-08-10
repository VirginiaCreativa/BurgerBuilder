import React, { Component } from "react";
import Aux from "./../../Hoc/Aux.js";
import Burger from "./../../components/Burger/Burger.js";

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
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
