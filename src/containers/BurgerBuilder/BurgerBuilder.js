import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "../../server/axios-orders";

import Aux from "./../../Hoc/Aux/Aux.js";
import Burger from "./../../components/Burger/Burger.js";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls.js";
import Modal from "./../../components/UI/Modal/Modal.js";
import OrderSummary from "./../../components/Burger/OrderSummary/OrderSummary.js";

const INGREDIENT_PRICES = {
  bacon: 1.0,
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
    totalPrice: 0,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((suma, el) => {
        return suma + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

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
    this.updatePurchaseState(updateIngredients);
  };

  RemoveIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount.length <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        nombre: "Virginia Velásquez Soto",
        address: {
          street: "Calle 16 # 14 - 128",
          barrio: "Poblado",
          piso: "4 apto"
        },
        email: "virginiavelasquez16@gmail.com"
      },
      metodoentrega: "rápido"
    };
    axios
      .post("/orders.json", order)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <div>
        <Aux>
          <Modal
            show={this.state.purchasing}
            modalClosed={this.purchaseCancelHandler}
          >
            <OrderSummary
              ingredients={this.state.ingredients}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinue={this.purchaseContinueHandler}
              price={this.state.totalPrice}
            />
          </Modal>
          <Container>
            <Row>
              <Col>
                <Burger ingredients={this.state.ingredients} />
              </Col>
              <Col>
                <BuildControls
                  ingredientAdded={this.AddIngredientHandler}
                  ingredientRemoved={this.RemoveIngredientHandler}
                  disabled={disableInfo}
                  purchasable={this.state.purchasable}
                  ordered={this.purchaseHandler}
                  price={this.state.totalPrice}
                />
              </Col>
            </Row>
          </Container>
        </Aux>
      </div>
    );
  }
}

export default BurgerBuilder;
