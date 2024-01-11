"use client";

import React from "react";
import Image from "next/image";
// Wrapper
import BlockSection from "@/components/blocks/wrappers/BlockSection";
// Design System
import Heading from "@/components/modules/Heading";
import Button from "@/components/modules/Button";
import Richtext from "@/components/modules/Richtext";

const TwoColumnContentWithImage = ({
  id,
  borderTop = false,
  borderBottom = false,
  backgroundColor = `white`,
  backgroundHex,
  paddingTop,
  paddingBottom,
  className = `b__size-md`,
  // Content
  title = `Section Title`,
  titleColor = `u__branding-color--secondary`,
  heading = `Powerful Section Heading to Insure Readability`,
  content = `<p> <span> Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </span> </p> <p> <span> Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </span> </p>`,
  button = {
    title: `Get Started`,
    destination: ``,
  },
  image = {
    src: `https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/side-hustle-2.jpeg`,
    alt: ``,
  },
  imageObjectFit = `cover`,
  imageScale = `1.0`,
  invertedColumns,
  leftRipple = false,
  rightRipple = false,
  isCard = false,
  cardBackgroundColor = `var(--t-primary-light-background-color)`,
  enableCardBorder = false,
  sectionOverflowHidden = true,
}) => {
  return (
    <>
      <style jsx>{`
        .b__feature__two-column-content-with-image__content-wrapper--is-card {
          padding: 2rem;
          background-color: ${cardBackgroundColor};
          border-radius: 28px;
          ${enableCardBorder && `border: 2px solid var(--t-border-color);`}
        }

        @media (min-width: 768px) {
          .b__feature__two-column-content-with-image__content-wrapper--is-card {
            padding: 5rem;
          }
          .c__image-wrapper {
            min-height: 350px;
          }
        }

        @media (min-width: 992px) {
          .b__feature__two-column-content-with-image__content-wrapper--is-card {
            padding: 3rem;
          }
          .c__image-wrapper {
            transform: scale(${imageScale});
          }
        }

        @media (min-width: 1300px) {
          .b__feature__two-column-content-with-image__content-wrapper--is-card {
            padding: 4rem;
          }
        }

        @media (min-width: 1400px) {
          .b__feature__two-column-content-with-image__content-wrapper--is-card {
            padding: 5rem;
          }
        }
      `}</style>
      <BlockSection
        id={id}
        borderTop={borderTop}
        borderBottom={borderBottom}
        backgroundColor={backgroundColor}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        blockClassName={`b__feature__two-column-content-with-image position-relative ${
          sectionOverflowHidden ? `overflow-hidden` : ``
        } ${className}`}
        backgroundHex={backgroundHex}
      >
        {leftRipple && (
          <div className="c__ripple c__ripple--top-left">
            <figure className="m-0">
              <img
                src="https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/ripple-purple.webp"
                alt="Design Ripple"
              />
            </figure>
          </div>
        )}
        {rightRipple && (
          <div className="c__ripple c__ripple--bottom-right">
            <figure className="m-0">
              <img
                src="https://23219927.fs1.hubspotusercontent-na1.net/hubfs/23219927/ripple-blue.webp"
                alt="Design Ripple"
              />
            </figure>
          </div>
        )}

        <div className="container position-relative">
          <div
            className={`b__feature__two-column-content-with-image__content-wrapper ${
              isCard &&
              `b__feature__two-column-content-with-image__content-wrapper--is-card`
            }`}
          >
            <div className="row">
              <div
                className={`${
                  invertedColumns
                    ? `col-lg-6 mb-4 pb-3 pb-lg-0 mb-lg-0 order-lg-2`
                    : `col-lg-6 mb-4 pb-3 pb-lg-0 mb-lg-0`
                }`}
              >
                <div
                  className={`b__feature__two-column-content-with-image__content-body ${
                    invertedColumns ? `ps-lg-5` : `pe-lg-5`
                  }`}
                >
                  {title && (
                    <div className="mb-3">
                      <span
                        className={`u__subtitle u__f-700 u__letter-spacing--tight ${
                          titleColor ? titleColor : ``
                        }`}
                      >
                        {title}
                      </span>
                    </div>
                  )}
                  {heading && (
                    <div className="mb-3">
                      <Heading headingTag="h2" className="u__h1 mb-0">
                        {heading}
                      </Heading>
                    </div>
                  )}
                  {content && (
                    <div className="">
                      <Richtext>{content}</Richtext>
                    </div>
                  )}
                  {button && (
                    <div className="mt-4">
                      <Button
                        buttonSize="default"
                        title={button.title}
                        destination={button.destination}
                        style="primary"
                      />
                    </div>
                  )}
                </div>
              </div>
              {image && (
                <div
                  className={`${
                    invertedColumns ? `col-lg-6 order-lg-1` : `col-lg-6`
                  }`}
                >
                  <div className="b__feature__two-column-content-with-image__image-wrapper c__image-wrapper">
                    <Image
                      placeholder={`empty`}
                      className="u__br-28 c__image"
                      blurDataURL={""}
                      src={image.src}
                      alt={image.alt}
                      title={image.alt}
                      fill={true}
                      style={{ objectFit: imageObjectFit }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </BlockSection>
    </>
  );
};

export default TwoColumnContentWithImage;
