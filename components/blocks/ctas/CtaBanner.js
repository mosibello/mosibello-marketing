import React from "react";
// Wrapper
import BlockSection from "@/components/blocks/wrappers/BlockSection";
// Design System
import Heading from "@/components/modules/Heading";
import Button from "@/components/modules/Button";

const CtaBanner = ({
  id,
  borderTop = false,
  borderBottom = false,
  backgroundColor = `white`,
  backgroundHex,
  paddingTop,
  paddingBottom,
  className = `b__size-md`,
  // Content
  heading = `Communicate with customers like <br className="u__show-after-992" />never before.`,
  description = `Build your reputation by building strong customer relationships.`,
  button = {
    title: `Get a Free Quote`,
    destination: `/contact`,
  },
  centeredContent = true,
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
        blockClassName={`b__cta__cta-banner ${className}`}
        backgroundHex={backgroundHex}
      >
        <div className="container">
          <div
            className={`b__cta__cta-banner__row ${
              centeredContent ? `text-center` : ``
            }`}
          >
            <div className="b__cta__cta-banner__column b__cta__cta-banner__column--left">
              {heading && (
                <div className="mb-3">
                  <Heading
                    headingTag="h2"
                    className="c__cta-banner__heading u__d2"
                  >
                    {heading}
                  </Heading>
                </div>
              )}
              {description && (
                <div className="mb-4 mb-md-5">
                  <Heading
                    headingTag="h3"
                    className="c__cta-banner__heading u__h4 u__f-500"
                  >
                    {description}
                  </Heading>
                </div>
              )}
            </div>
            {button && (
              <div className="b__cta__cta-banner__column b__cta__cta-banner__column--right">
                <div className="mt-4">
                  <Button
                    buttonSize="default"
                    buttonStyle="inverted"
                    title={button.title}
                    destination={button.destination}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </BlockSection>
    </>
  );
};

export default CtaBanner;
