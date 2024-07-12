import React from "react";

const IconCard = () => {
  return (
    <div className="c__recommended-solutions-card u__bg-blue-25">
      <div className="c__recommended-solutions-card__wrapper">
        <div className="c__recommended-solutions-card__icon-wrapper">
          <figure className="m-0">
            <img
              loading="lazy"
              src="https://www.taylor.com/hubfs/_Taylor.com%20-%20All%20file%20connected%20%20to%20main%20site%20and%20blogs/01.2%20Product%20Pages/Omnichannel%20Retail%20%5BProduct%5D/Financial-icon.svg"
              alt="Financial-icon"
            />
            <figcaption className="visually-hidden">Financial-icon</figcaption>
          </figure>
        </div>
        <div className="c__recommended-solutions-card__heading-wrapper">
          <h3 className="c__recommended-solutions-card__heading u__h5">
            Financial Omnichannel Marketing
          </h3>
        </div>
        <div className="c__recommended-solutions-card__description-wrapper">
          <p className="c__recommended-solutions-card__description mb-0">
            Increase interest, loyalty and sales with personalized experiences
            and communications.
          </p>
        </div>
        <div className="c__recommended-solutions-card__button-wrapper mt-auto pt-4">
          <a
            className="c__button__anchor-element"
            href="https://www.taylor.com/solutions/omnichannel-communications/financial-omnichannel-marketing"
          >
            <span className="c__button c__button--with-icon c__button c__button--with-icon c__button--secondary c__button--type-squarish c__button--animate-padding-left">
              <div className="c__button__content u__f-700">
                <span>Learn more</span>
                <div className="c__button__icon">
                  <figure className="m-0">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.16666 7.00008H12.8333M12.8333 7.00008L6.99999 1.16675M12.8333 7.00008L6.99999 12.8334"
                        stroke="#2458F1"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </figure>
                </div>
              </div>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IconCard;
