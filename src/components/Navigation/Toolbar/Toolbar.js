import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "./../../Logo/Logo.js";
import Navs from "./../Navs/Navs.js";
import DrawerToggle from "./../SideDrawer/DrawerToggle/DrawerToggle.js";
import classes from "./Toolbar.scss";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Row>
      <Col xs={2} className={classes.Menu}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
      </Col>
      <Col xs={10} md={9} className={classes.Logo}>
        <Logo />
      </Col>
      <Col md={3} className={classes.Nav}>
        <Navs />
      </Col>
    </Row>
  </header>
);
export default toolbar;
