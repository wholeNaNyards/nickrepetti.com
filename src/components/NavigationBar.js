import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import "./NavigationBar.css";

const NavigationBar = () => (
  <nav className="navBar">
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="logo"
    >
      NR
    </div>
    <ul className="iconContainer">
      <li className="icon">
        <a href="https://twitter.com/wholeNaNyards">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li className="icon">
        <a href="https://www.linkedin.com/in/nickrepetti">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li className="icon">
        <a href="https://github.com/wholeNaNyards">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
