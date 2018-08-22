import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "./../../Logo/Logo.js";
import Navs from "./../Navs/Navs.js";
import classes from "./Toolbar.scss";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Row>
      <Col md={8}>
        <Logo />
      </Col>
      <Col md={4}>
        <Navs />
      </Col>
    </Row>
  </header>
);
export default toolbar;
