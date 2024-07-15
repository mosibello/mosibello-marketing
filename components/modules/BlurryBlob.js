"use client";
import styled from "styled-components";

import React from "react";

const BlurryBlob = ({
  top,
  left,
  right,
  bottom,
  color = `var(--t-blob-color-1)`,
  opacity = "0.2",
  transform = `scale(1.1)`,
}) => {
  const Component = styled.div`
    position: absolute;
    width: 800px;
    height: 800px;
    top: ${top && top};
    left: ${left && left};
    right: ${right && right};
    bottom: ${bottom && bottom};
    color: ${color && color};
    opacity: ${opacity && opacity};
    transform: ${transform && transform};
  `;
  return (
    <Component>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        opacity={1}
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation={79}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            />
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx={182}
            ry={208}
            cx="402.843453771781"
            cy="410.4639066526403"
            fill="currentColor"
          />
        </g>
      </svg>
    </Component>
  );
};

export default BlurryBlob;
