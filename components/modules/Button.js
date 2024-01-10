import React from "react";
import Link from "next/link";

const Button = ({
  title = `Get Started`,
  destination,
  className,
  buttonStyle = `primary`,
  buttonSize = `default`,
}) => {
  return (
    <div className={`c__button-wrapper`}>
      <Link
        className="c__button__anchor-element"
        href={destination ? destination : `#`}
      >
        <span
          className={`c__button c__button--${buttonStyle} ${
            className ? className : ``
          } c__button__size--${buttonSize}`}
        >
          <div className="c__button__content u__f-700">
            <span>{title}</span>
          </div>
        </span>
      </Link>
    </div>
  );
};

export default Button;
