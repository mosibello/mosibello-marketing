import React from "react";
import parse from "html-react-parser";

const Heading = ({ className, headingTag, children }) => {
  const Tag = headingTag;
  return (
    <>
      {children && (
        <Tag className={`c__heading ${className ? className : ``}`}>
          {parse(children)}
        </Tag>
      )}
    </>
  );
};

export default Heading;
