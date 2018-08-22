import React, { Component } from "react";
import Aux from "./../../Hoc/Aux.js";
import classes from "./Layout.scss";
import Toolbar from "./../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer.js";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.Wrapper}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
