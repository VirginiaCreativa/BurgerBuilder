import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Layout>
            <p>Test</p>
          </Layout>
        </Container>
      </div>
    );
  }
}
export default App;
