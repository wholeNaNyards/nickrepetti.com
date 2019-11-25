import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Header.css";

import profilePic from "../assets/nick.jpeg";

const Header = () => {
  return (
    <Row className="header">
      <Col md={4} mdOffset={1}>
        <img
          className="header__image img-responsive img-circle"
          src={profilePic}
          alt="Nick Repetti"
        />
      </Col>
      <Col md={7}>
        <h1 className="header__name">Nick Repetti</h1>
        <h2 className="header__caption">
          <a href="https://twitter.com/wholeNaNyards">@wholeNaNyards</a>
        </h2>
        <h2 className="header__caption">
          Software Engineer{" "}
          <span role="img" aria-label="Programmer">
            👨‍💻
          </span>
          | Gamer{" "}
          <span role="img" aria-label="Hockey">
            🏒
          </span>
          <span role="img" aria-label="Video Game">
            🎮
          </span>
        </h2>
      </Col>
    </Row>
  );
};

export default Header;
