import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "./../../Logo/Logo.js";
import Navigation from "./../../Navigation/NavigationItems/Navigationitems.js";

import classes from "./Toolbar.scss";
const toolbar = props => (
  <header className={classes.Toolbar}>
    <Row>
      <Col md={9}>
        <Logo />
      </Col>
      <Col md={3}>
        <nav>
          <Navigation />
        </nav>
      </Col>
    </Row>
  </header>
);
export default toolbar;
