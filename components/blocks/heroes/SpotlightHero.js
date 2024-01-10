"use client";

import React from "react";
// Wrapper
import BlockSection from "@/components/blocks/wrappers/BlockSection";
// Design System
import Heading from "@/components/modules/Heading";
import Button from "@/components/modules/Button";
import Description from "@/components/modules/Description";

const SpotlightHero = ({
  id,
  borderTop = false,
  borderBottom = false,
  backgroundColor = `white`,
  backgroundHex,
  paddingTop,
  paddingBottom,
  className = `b__size-md`,
  // Content
  heading = `We craft modern websites <br className="u__show-after-992" />
  and cutting-edge apps.`,
  headingSize = `d0`,
  description = `Unlock your business's full potential with high-performance websites <br className="u__show-after-992" /> crafted using the latest and innovative technologies.`,
  button = {
    title: `Get a Free Quote`,
    destination: `#`,
  },
  centered = true,
  contentWrapperClassName,
  textGradient = true,
}) => {
  return (
    <>
      <style global jsx>{`
        .b__hero__spotlight-hero__heading-wrapper--text-gradient .c__heading {
          background-image: linear-gradient(
            161deg,
            #000 26.07%,
            #6b00bb 100.23%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
        }
      `}</style>
      <BlockSection
        id={id}
        borderTop={borderTop}
        borderBottom={borderBottom}
        backgroundColor={backgroundColor}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        blockClassName={`b__hero__spotlight-hero ${className}`}
        backgroundHex={backgroundHex}
      >
        <div className="container">
          <div
            className={`b__hero__spotlight-hero__content-wrapper ${
              centered ? `text-center` : ``
            } ${contentWrapperClassName ? contentWrapperClassName : ``}`}
          >
            {heading && (
              <div
                className={`mb-4 ${
                  textGradient
                    ? `b__hero__spotlight-hero__heading-wrapper--text-gradient`
                    : ``
                }`}
              >
                <Heading headingTag="h1" className={`u__${headingSize} mb-0`}>
                  {heading}
                </Heading>
              </div>
            )}
            {description && (
              <div className="mb-4 pb-2">
                <Description htmlTag={"p"} className="u__h5">
                  {description}
                </Description>
              </div>
            )}
            {button && (
              <div className="">
                <Button
                  buttonSize="large"
                  title={button.title}
                  destination={button.destination}
                  style="primary"
                />
              </div>
            )}
          </div>
        </div>
      </BlockSection>
    </>
  );
};

export default SpotlightHero;
