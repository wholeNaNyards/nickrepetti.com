import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "../styles/portfolio.css";

import Header from "./Header";
import PortfolioItem from "./portfolio-item";

import flockingVideo from "../assets/flocking.mp4";
import racetrackVideo from "../assets/racetrack.mp4";
import lfrVideo from "../assets/lfr.mp4";
import lfrAlert from "../assets/alert-example.png";
import lfrAlertWebP from "../assets/alert-example.webp";
import hbSalesVideo from "../assets/hb-sales-map.mp4";
import wnyImg from "../assets/wholenanyardscom.png";
import wnyImgWebP from "../assets/wholenanyardscom.webp";
import hbgmconfImg from "../assets/hb-gm-conf.png";
import hbgmconfImgWebP from "../assets/hb-gm-conf.webp";
import wnyChatImg from "../assets/wny-chat.png";
import wnyChatImgWebP from "../assets/wny-chat.webp";
import twitchDataCollectorImg from "../assets/twitch-data-collector.png";
import twitchDataCollectorImgWebP from "../assets/twitch-data-collector.webp";
import ahMonitorImg from "../assets/ah-monitor.png";
import ahMonitorImgWebP from "../assets/ah-monitor.webp";
import electronicsStoreImg from "../assets/electronics-store.png";
import electronicsStoreImgWebP from "../assets/electronics-store.webp";

const Portfolio = () => {
  return (
    <Grid fluid className="main-container">
      <Row>
        <Col md={6} mdOffset={3} xl={8} xlOffset={2}>
          <Header />
          <hr />
          <p className="portfolio-description">
            <span role="img" aria-label="Wave emoji">
              👋
            </span>{" "}
            I'm Nick! I like to travel and create things on the web. I've
            delivered software used by millions of people, which autoscales to
            handle 30 million requests per day.
            <br />
            <br />
            I'm AWS Certified, have a Bachelor of Science in Computer
            Engineering, and spend my free time playing hockey and video games.
            <br />
            <br />
            Reach out to me at{" "}
            <a href="mailto:nickrepetti@gmail.com">nickrepetti@gmail.com</a> to
            get in touch.
          </p>
          <h3 className="portfolio-header">
            Check Out Some of My Side Projects
          </h3>
          <PortfolioItem
            title="Emergent Behavoirs (AI)"
            description="<a href='https://godotengine.org/'>Godot</a> is a video game engine, similar to Unreal or Unity.  This project is my Godot adaptation of some of the ideas found in the books <a href='https://www.oreilly.com/library/view/programming-game-ai/9781556220784/'>Programming Game AI by Example</a> and <a href='https://gameprogrammingpatterns.com/'>Game Programming Patterns</a>. It is written in GDScript, a language similar to Python.  All artwork was made by either me or my lovely wife.
            <br>
            <br>
            Each AI behavior arises from simple rules, mostly based around manipulating Physics Vectors and performing efficient calculations. The project contains 6 examples in total.
            <br>
            <br>
            In the following media, I've shown samples that highlight some of the AI patterns, specifically:
            <ul>
            <li>Path Following w/ Obstacle Avoidance</li>
            <li>Emergent Behavoirs - Flocking</li>
            <li>Leader Following</li>
            </ul>
            "
            media={[{ video: flockingVideo }, { video: racetrackVideo }]}
            techList={["GDScript", "C++"]}
            github={[{ url: "https://github.com/wholeNaNyards/game-ai" }]}
          />
          <PortfolioItem
            title="Lookingforraid.io"
            description="
            Customizable recruitment alerter that notifies World of Warcraft guilds whenever a player is looking for a new guild.
            <br />
            <br />
            It scrapes the web to find new players, and then uses OAuth2 to send a message to the given Discord channel, based on certain business logic. Each message contains relevant stats and info about each player, sourced from different public and private APIs.
            <br />
            <br />
            The application is hosted in AWS and uses DynamoDB to store data about guilds and players.
            "
            linkName="lookingforraid.io"
            media={[
              {
                image: lfrAlert,
                webP: lfrAlertWebP,
                alt: "Lookingforraid.io Discord Alert",
              },
              { video: lfrVideo },
            ]}
            techList={[
              "Serverless",
              "React",
              "AWS",
              "OAuth",
              "API",
              "Lambda",
              "API Gateway",
              "DynamoDB",
            ]}
            github={[
              {
                url: "https://github.com/wholeNaNyards/lookingforraid.io",
                text: "View Frontend on GitHub",
              },
              {
                url: "https://github.com/wholeNaNyards/lfr",
                text: "View Backend on GitHub",
              },
            ]}
          />
          <PortfolioItem
            title="Habit Burger Live Sales Map"
            description="Live sales map for the Habit Burger Restaurants. For each new sale, based on type, a Pin is dropped on the map and the daily totals are updated. Map clears pins over time and resets all data every night at midnight."
            media={[
              {
                video: hbSalesVideo,
              },
            ]}
            techList={[
              "Data Visualization",
              "Serverless",
              "Google Maps API",
              "React",
              "AWS",
              "API",
              "Cognito",
              "Lambda",
              "API Gateway",
              "DynamoDB",
            ]}
          />
          <PortfolioItem
            title="JAMstack Blog PWA"
            description="Personal blog progressive web app, built with an emphasis on mobile performance, scoring a 92% or above on all Lighthouse metrics."
            linkName="wholenanyards.com"
            media={[
              {
                image: wnyImg,
                webP: wnyImgWebP,
                alt: "Screenshot of wholenanyards.com",
              },
            ]}
            techList={["GatsbyJS", "PWA", "React", "GraphQL"]}
            github={[
              { url: "https://github.com/wholeNaNyards/wholenanyards.com" },
            ]}
          />
          <PortfolioItem
            title="Habit Burger GM Conference"
            description="A web application to support the annual Habit Burger General Manager's Conference."
            media={[
              {
                image: hbgmconfImg,
                webP: hbgmconfImgWebP,
                alt: "Screenshot of the website for the Habit Burger GM Conference",
              },
            ]}
            techList={["React", "Redux", "AWS", "DynamoDB", "S3", "Cloudfront"]}
          />
          <PortfolioItem
            title="Serverless Chat"
            description="A real-time, 100% serverless chat application that uses WebSockets over AWS API Gateway."
            media={[
              {
                image: wnyChatImg,
                webP: wnyChatImgWebP,
                alt: "Screenshot of chat.wholenanyards.com",
              },
            ]}
            techList={[
              "Serverless",
              "WebSockets",
              "React",
              "AWS",
              "Lambda",
              "API Gateway",
              "DynamoDB",
            ]}
            github={[
              {
                url: "https://github.com/wholeNaNyards/chat.wholenanyards.com",
                text: "View Frontend on GitHub",
              },
              {
                url: "https://github.com/wholeNaNyards/wny-chat",
                text: "View Backend on GitHub",
              },
            ]}
          />
          <PortfolioItem
            title="Twitch Data Collector"
            description="A serverless Node.js application that collects data from the Twitch API. Analysis is run to help streamers build up their viewer base.  Currently housed on AWS."
            media={[
              {
                image: twitchDataCollectorImg,
                webP: twitchDataCollectorImgWebP,
                alt: "Screenshot of data being collected from Twitch",
              },
            ]}
            techList={["Node.js", "AWS", "PostgreSQL", "Serverless"]}
            github={[
              { url: "https://github.com/nickrepetti/twitch-data-collector" },
            ]}
          />
          <PortfolioItem
            title="WoW Auction House Monitor"
            description="This application polls the World of Warcraft auction house and collects the data for the current auctions.  Will send a text message to notify when a specific auction falls below a threshold price."
            media={[
              {
                image: ahMonitorImg,
                webP: ahMonitorImgWebP,
                alt: "Screenshot of Java code written for the WoW auction house monitor.",
              },
            ]}
            techList={["Java", "MySQL"]}
            github={[{ url: "https://github.com/nickrepetti/ah-monitor" }]}
          />
          <PortfolioItem
            title="Electronics Store"
            description="A Spring/AngularJS bare-bones e-commerce web application."
            media={[
              {
                image: electronicsStoreImg,
                webP: electronicsStoreImgWebP,
                alt: "Screenshot of a fake e commerce website.",
              },
            ]}
            techList={[
              "Java",
              "Spring Framework",
              "Angular 1",
              "H2 Database",
              "HTML",
              "CSS",
            ]}
            github={[
              { url: "https://github.com/nickrepetti/electronics-store" },
            ]}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default Portfolio;
