import React from "react";

import "../styles/portfolio-item.css";

const PortfolioItem = ({
  title,
  linkName,
  linkUrl,
  description,
  img,
  imgAlt,
  techList,
  githubUrl
}) => {
  return (
    <div className="portfolio-item">
      <hr />
      <h1 className="portfolio-item__title">{title}</h1>
      {linkName && linkUrl && (
        <a href={linkUrl} className="portfolio-item__link" target="_blank">
          {linkName}
        </a>
      )}
      <p className="portfolio-item__description">{description}</p>
      {Array.isArray(img) ? (
        img.map(currentImage => {
          return (
            <a href={currentImage}>
              <img
                className="portfolio-item__image"
                src={currentImage}
                alt={imgAlt}
              />
            </a>
          );
        })
      ) : (
        <a href={img}>
          <img className="portfolio-item__image" src={img} alt={imgAlt} />
        </a>
      )}
      <ul className="portfolio-item__tech-list">
        {techList.map(tech => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>
      <a className="githubLink" href={githubUrl} target="_blank">
        View on GitHub
      </a>
    </div>
  );
};

export default PortfolioItem;
