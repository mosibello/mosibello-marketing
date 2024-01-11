import React from "react";
// Wrapper
import BlockSection from "@/components/blocks/wrappers/BlockSection";
// Design System
import Heading from "@/components/modules/Heading";
import Description from "@/components/modules/Description";

const TestimonialBanner = ({
  id,
  borderTop = false,
  borderBottom = false,
  backgroundColor = `white`,
  backgroundHex,
  paddingTop,
  paddingBottom,
  className = `b__size-md`,
  // Content
  heading = `Gubergren, no sea takimata sanctus est lorem ipsum dolor<br class="u__show-after-992"/> sit amet. Lorem ipsum dolor sit amet`,
  name = `John Doe`,
  title = `Product Designer @ Elvis`,
  bannerBackgroundHex = null,
}) => {
  return (
    <>
      <BlockSection
        id={id}
        borderTop={borderTop}
        borderBottom={borderBottom}
        backgroundColor={backgroundColor}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        blockClassName={`b__testimonial__testimonial-banner ${className}`}
        backgroundHex={backgroundHex}
      >
        <div className="container">
          <div
            className={`c__testimonial-banner`}
            style={{
              background: bannerBackgroundHex && bannerBackgroundHex,
            }}
          >
            <div className="c__testimonial-banner__wrapper text-center">
              {heading && (
                <div className="mb-4 mb-md-5">
                  <Heading
                    headingTag="h2"
                    className="c__testimonial-banner__heading u__h3"
                  >
                    {heading}
                  </Heading>
                </div>
              )}
              {name && (
                <div className="c__testimonial-banner__title-wrapper">
                  <Description
                    htmlTag={`span`}
                    className="d-block u__letter-spacing--tight c__testimonial-banner__title u__p u__heading-color--primary u__f-700"
                  >
                    {name}
                  </Description>
                </div>
              )}
              {title && (
                <div className="c__testimonial-banner__company-wrapper">
                  <Description
                    htmlTag={`span`}
                    className="d-block c__testimonial-banner__company u__small"
                  >
                    {title}
                  </Description>
                </div>
              )}
            </div>
          </div>
        </div>
      </BlockSection>
    </>
  );
};

export default TestimonialBanner;
