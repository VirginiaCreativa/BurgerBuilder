import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import HomeLayout from "../components/Home";

class Home extends Component {
  state = {
    count: 0
  };

  CountHandler = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <Container>
          <HomeLayout />
          <Row>
            <Col>
              <h3>Virginia Velásquez Soto</h3>
            </Col>
            <Col>
              <h5>Hello World</h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
