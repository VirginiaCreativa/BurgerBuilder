import React from "react";
import { Container, Row, Col } from "reactstrap";
import styleHome from "./HomeStyle.scss";

const HomeLayout = props => (
  <div>
    <div className={styleHome.boxModel}>
      <h1>Hello World</h1>
      <i className="fas fa-adjust" />
      <p>{props.count}</p>
      <div>{props.children}</div>
    </div>
  </div>
);
export default HomeLayout;
