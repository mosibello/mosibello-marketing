import React from "react";
import parse from "html-react-parser";

const Description = ({ className, htmlTag, children }) => {
  const Tag = htmlTag;
  return (
    <>
      {children && (
        <Tag className={`${className ? className : ``}`}>{parse(children)}</Tag>
      )}
    </>
  );
};

export default Description;
