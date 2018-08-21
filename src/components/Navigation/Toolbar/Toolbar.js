import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "./../../Logo/Logo.js";

import classes from "./Toolbar.scss";
const toolbar = props => (
  <header className={classes.Toolbar}>
    <Row>
      <Col>
        <Logo />
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
