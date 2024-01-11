import React from "react";
const BlockSection = ({
  children,
  id,
  // Settings
  borderTop,
  borderBottom,
  backgroundHex,
  paddingTop,
  paddingBottom,
  blockClassName,
}) => {
  return (
    <>
      <section
        id={id ? `b__id-${id}` : null}
        className={`${borderTop ? `u__border-top` : ``} ${
          borderBottom ? `u__border-bottom` : ``
        } ${blockClassName ? blockClassName : ``}`}
        style={{
          backgroundColor: backgroundHex && backgroundHex,
          paddingTop: paddingTop && paddingTop + "rem",
          paddingBottom: paddingBottom && paddingBottom + "rem",
        }}
      >
        {children}
      </section>
    </>
  );
};

export default BlockSection;
