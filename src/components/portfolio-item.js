import React from "react";

import "../styles/portfolio-item.css";

const PortfolioItem = ({
  title,
  linkName,
  linkUrl,
  description,
  media,
  techList,
  github
}) => {
  return (
    <div className="portfolio-item">
      <hr />
      <h1 className="portfolio-item__title">{title}</h1>
      {linkName && linkUrl && (
        <a href={linkUrl} className="portfolio-item__link">
          {linkName}
        </a>
      )}
      <p className="portfolio-item__description">{description}</p>
      {media.map(item => {
        if (item.image) {
          return (
            <a href={item.image} key={item.image}>
              <img
                className="portfolio-item__image"
                src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                data-src={item.image}
                alt={item.alt}
              />
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
        {techList.map(tech => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>
      {github &&
        github.map(item => {
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
