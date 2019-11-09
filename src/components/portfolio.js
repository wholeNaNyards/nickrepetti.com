import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "../styles/portfolio.css";

import Header from "./Header";
import PortfolioItem from "./portfolio-item";

import lfrImg from "../assets/lfr.gif";
import lfrAlert from "../assets/alert-example.png";
import hbgmconfImg from "../assets/hb-gm-conf.png";
import twitchDataCollectorImg from "../assets/twitch-data-collector.png";
import ahMonitorImg from "../assets/ah-monitor.png";
import electronicsStoreImg from "../assets/electronics-store.png";

const Portfolio = () => {
  return (
    <Grid fluid className="main-container">
      <Row>
        <Col md={6} mdOffset={3}>
          <Header />
          <hr />
          <p className="portfolio-description">
            I'm Nick! I like to travel and create things on the web. I spend my
            free time playing hockey and video games. I also sometimes write to
            my <a href="https://wholenanyards.com">Blog</a>. Sometimes I do live
            stream coding on my <a href="https://twitch.tv/NobuffTV">Twitch.</a>
            <br />
            <br />
            I'm{" "}
            <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2018-12-27&ci=AWS00305929">
              AWS Certified
            </a>{" "}
            and have a Bachelor's in Computer Engineering. These days I mainly
            build things with Serverless and React, although I enjoy going out
            of my comfort zone every now and then.
            <br />
            <br />
            DM me <a href="https://twitter.com/wholeNaNyards">
              @wholeNaNyards
            </a>{" "}
            or shoot me an email at{" "}
            <a href="mailto:nickrepetti@gmail.com">nickrepetti@gmail.com</a> to
            get in touch.
          </p>
          <h3 className="portfolio-header">Check Out Some of My Projects</h3>
          <PortfolioItem
            title="Lookingforraid.io"
            description="A web application to support the annual Habit Burger General Managers Conference."
            linkName="lookingforraid.io"
            linkUrl="https://lookingforraid.io"
            img={[lfrImg, lfrAlert]}
            imgAlt="A portfolio image"
            techList={["React", "Redux", "AWS", "DynamoDB"]}
            githubUrl="https://github.com/nickrepetti/hb-gm-conf"
          />
          <PortfolioItem
            title="Habit Burger GM Conference"
            description="A web application to support the annual Habit Burger General Managers Conference."
            img={hbgmconfImg}
            imgAlt="A portfolio image"
            techList={["React", "Redux", "AWS", "DynamoDB"]}
            githubUrl="https://github.com/nickrepetti/hb-gm-conf"
          />
          <PortfolioItem
            title="twitch-data-collector"
            description="A serverless Node.js application that collects data from the Twitch API. Analysis is run to help streamers build up their viewer base.  Currently housed on AWS."
            img={twitchDataCollectorImg}
            imgAlt="A portfolio image"
            techList={["Node.js", "AWS", "PostgreSQL", "Serverless"]}
            githubUrl="https://github.com/nickrepetti/twitch-data-collector"
          />
          <PortfolioItem
            title="ah-monitor"
            description="This application polls the World of Warcraft auction house and collects the data for the current auctions.  Will send a text message to notify when a specific auction falls below a threshold price."
            img={ahMonitorImg}
            imgAlt="A portfolio image"
            techList={["Java", "MySQL"]}
            githubUrl="https://github.com/nickrepetti/ah-monitor"
          />
          <PortfolioItem
            title="electronics-store"
            description="A Spring/AngularJS bare-bones e-commerce web application."
            img={electronicsStoreImg}
            imgAlt="A portfolio image"
            techList={[
              "Java",
              "Spring Framework",
              "Angular 1",
              "H2 Database",
              "HTML",
              "CSS"
            ]}
            githubUrl="https://github.com/nickrepetti/electronics-store"
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default Portfolio;
