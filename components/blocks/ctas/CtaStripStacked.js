import React from "react";
// Wrapper
import BlockSection from "@/components/blocks/wrappers/BlockSection";
// Design System
import Heading from "@/components/modules/Heading";
import Button from "@/components/modules/Button";

const CtaStripStacked = ({
  id,
  borderTop = false,
  borderBottom = false,
  backgroundColor = `white`,
  backgroundHex,
  paddingTop,
  paddingBottom,
  className = `b__size-md`,
  // Content
  heading = `Communicate with customers like never before.`,
  description = `Build your reputation by building strong customer relationships.`,
  button = {
    title: `Get a Free Quote`,
    destination: `/`,
  },
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
        blockClassName={`b__cta__cta-strip-stacked ${className}`}
        backgroundHex={backgroundHex}
      >
        <div className="container">
          <div className="c__cta-strip-stacked">
            <div className="c__cta-strip-stacked__wrapper text-center">
              {heading && (
                <div className="mb-3">
                  <Heading
                    headingTag="h2"
                    className="c__cta-strip-stacked__heading u__h2 text-white"
                  >
                    {heading}
                  </Heading>
                </div>
              )}
              {description && (
                <div className="mb-4 mb-md-5">
                  <Heading
                    headingTag="h3"
                    className="c__cta-strip-stacked__heading u__h5 u__f-500 text-white"
                  >
                    {description}
                  </Heading>
                </div>
              )}
              {button && (
                <div className="mt-4">
                  <Button
                    buttonSize="default"
                    buttonStyle="inverted"
                    title={button.title}
                    destination={button.destination}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </BlockSection>
    </>
  );
};

export default CtaStripStacked;
