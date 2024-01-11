import React from "react";
// Wrapper
import BlockSection from "@/components/blocks/wrappers/BlockSection";
// Design System
import Heading from "@/components/modules/Heading";
import Description from "@/components/modules/Description";
import IconCard from "@/components/modules/iconCard";

const HeadingWithIconCards = ({
  id,
  borderTop = false,
  borderBottom = false,
  backgroundColor = `white`,
  backgroundHex,
  paddingTop,
  paddingBottom,
  className = `b__size-md`,
  // Content
  heading = `How Mosibello Supports Your Business`,
  headingSize = `h4`,
  description = `We use the power of Jamstack and server-side rendering to ship
  value to our customers.`,
  cards = [
    ...Array(4).fill({
      iconImage: null,
      iconJSX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" > <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /> </svg>`,
      heading: `Sample Heading`,
      description: `All of our web app development projects have a dedicated development team that continues to work on the product throughout its lifetime to ensure it’s always functioning properly.`,
      button: { title: `Learn More`, destination: `#` },
    }),
  ],
  columnClassName = "col-lg-6 mb-4",
  cardClassName = `u__bg-gray-50 c__icon-card--with-border`,
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
        blockClassName={`b__feature__heading-with-icon-cards ${className}`}
        backgroundHex={backgroundHex}
      >
        <div className="container">
          <div className="b__feature__heading-with-icon-cards__content-wrapper text-center">
            {heading && (
              <div className="mb-4">
                <Heading headingTag="h2" className={`u__${headingSize} mb-0`}>
                  {heading}
                </Heading>
              </div>
            )}
            {description && (
              <div className="mb-4 pb-2">
                <Description htmlTag={"p"} className="u__subtitle">
                  {description}
                </Description>
              </div>
            )}
          </div>
        </div>
        {cards && (
          <div className="container mt-4 pt-3">
            <div className="row">
              {cards.map((elem, index) => {
                const { iconImage, iconJSX, heading, description, button } =
                  elem;
                return (
                  <div key={index} className={columnClassName}>
                    <IconCard
                      iconImage={iconImage}
                      iconJSX={iconJSX}
                      heading={heading}
                      description={description}
                      button={button}
                      className={cardClassName}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </BlockSection>
    </>
  );
};

export default HeadingWithIconCards;
