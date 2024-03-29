import React from "react";
import { Row, Col } from "react-bootstrap";

import "../styles/portfolio-item.css";

const PortfolioItem = ({
  title,
  linkName,
  linkUrl,
  description,
  media,
  techList,
  github,
}) => {
  return (
    <div className="portfolio-item">
      <hr />
      <Row>
        <Col xs={12} sm={6}>
          <h1 className="portfolio-item__title">{title}</h1>
        </Col>
        {linkName && linkUrl && (
          <div>
            <Col xs={12} smHidden mdHidden lgHidden>
              <a href={linkUrl} className="portfolio-item__link">
                {linkName}
              </a>
            </Col>
            <Col sm={6} xsHidden className="text-right">
              <a href={linkUrl} className="portfolio-item__link">
                {linkName}
              </a>
            </Col>
          </div>
        )}
      </Row>
      <p
        className="portfolio-item__description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {media.map((item) => {
        if (item.image) {
          return (
            <a href={item.image} key={item.image}>
              <picture>
                <source
                  className="portfolio-item__image"
                  type="image/webp"
                  srcSet={item.webP}
                />
                <source
                  className="portfolio-item__image"
                  type="image/png"
                  srcSet={item.image}
                />
                <img
                  className="portfolio-item__image"
                  data-src={item.image}
                  src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  alt={item.alt}
                />
              </picture>
            </a>
          );
        } else if (item.video) {
          return (
            <a href={item.video} key={item.video}>
              <video
                className="portfolio-item__image"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </a>
          );
        }
        return null;
      })}
      <ul className="portfolio-item__tech-list">
        {techList.map((tech) => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>
      {github &&
        github.map((item) => {
          return (
            <a className="githubLink" href={item.url} key={item.url}>
              {item.text ? item.text : "View on GitHub"}
            </a>
          );
        })}
    </div>
  );
};

export default PortfolioItem;
