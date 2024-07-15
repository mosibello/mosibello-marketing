import React from "react";
import Link from "next/link";

const Button = ({
  title,
  destination,
  className,
  style = `primary`,
  size = `default`,
}) => {
  return (
    <>
      {title && (
        <Link
          className="c__button__anchor-element"
          href={destination ? destination : `#`}
        >
          <span
            className={`c__button c__button--${style} ${
              className ? className : ``
            } c__button__size--${size}`}
          >
            <div className="c__button__content">
              <span>{title}</span>
            </div>
          </span>
        </Link>
      )}
    </>
  );
};

export default Button;
