import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const IconCard = ({
  iconJSX = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" > <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /> </svg>`,
  heading = `Sample Heading`,
  description = `All of our web app development projects have a dedicated development team that continues to work on the product throughout its lifetime to ensure it’s always functioning properly.`,
  button = { title: `Learn More`, destination: `#` },
  className = "u__bg-gray-50 c__icon-card--with-border",
}) => {
  return (
    <div className={`c__icon-card ${className}`}>
      <div className="c__icon-card__wrapper">
        {iconJSX && (
          <div className="c__icon-card__icon-wrapper">
            <figure className="m-0">{parse(iconJSX)}</figure>
          </div>
        )}
        {heading && (
          <div className="c__icon-card__heading-wrapper">
            <h3 className="c__icon-card__heading u__h5">{heading}</h3>
          </div>
        )}
        {description && (
          <div className="c__icon-card__description-wrapper">
            <p className="c__icon-card__description mb-0">{description}</p>
          </div>
        )}
        {button && (
          <div className="c__icon-card__button-wrapper mt-auto pt-4">
            <Link className="u__f-700" href={button.destination}>
              <span>{button.title}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default IconCard;
