import React from "react";
// Wrapper
import BlockSection from "@/components/blocks/wrappers/BlockSection";
// Design System
import Heading from "@/components/modules/Heading";
import Button from "@/components/modules/Button";

const SimpleError = ({
  id,
  borderTop = false,
  borderBottom = false,
  backgroundColor = `white`,
  backgroundHex,
  paddingTop,
  paddingBottom,
  className = `b__size-md`,
  // Content
  heading = `<span>404. </span>Not Found.`,
  button = {
    title: `Explore Mosibello`,
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
        blockClassName={`b__errors__simple-error ${className}`}
        backgroundHex={backgroundHex}
      >
        <div className="container text-center">
          {heading && (
            <div className="mb-4 mb-md-5">
              <Heading
                headingTag="h2"
                className="c__testimonial-banner__heading u__d1"
              >
                {heading}
              </Heading>
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
      </BlockSection>
    </>
  );
};

export default SimpleError;
