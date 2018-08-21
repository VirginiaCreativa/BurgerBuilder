import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Toolbar.scss";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Row>
      <Col>
        <div className={classes.Logo}>Logo</div>
      </Col>
      <Col>
        <div className={classes.Nav}>
          <nav>Nav2</nav>
        </div>
      </Col>
    </Row>
  </header>
);
export default toolbar;
