import React, { Component } from "react";
import Aux from "./../../Hoc/Aux.js";
import Burger from "./../../components/Burger/Burger.js";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 1,
      salad: 2,
      cheese: 1,
      meat: 1,
      onion: 1,
      tomats: 1,
      ketchup: 1,
      mayonnaise: 1,
      mustard: 1
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
