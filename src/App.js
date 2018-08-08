import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Layout>
            <BurgerBuilder />
          </Layout>
        </Container>
      </div>
    );
  }
}
export default App;
