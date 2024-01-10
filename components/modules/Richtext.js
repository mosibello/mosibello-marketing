import React from "react";
import parse from "html-react-parser";

const Richtext = ({ className, children }) => {
  return (
    <>
      {children && (
        <div className={`c__richtext-field ${className}`}>
          {parse(children)}
        </div>
      )}
    </>
  );
};

export default Richtext;
