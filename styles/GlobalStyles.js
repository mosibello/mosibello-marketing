"use client";
import { createGlobalStyle, css } from "styled-components";
import Theme from "./Theme";

const Styles = css`
  // ## Base
  html {
    font-size: 16px;
  }

  body,
  html {
    scroll-behavior: unset !important;
    // overflow-x: hidden !important;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--t-font-family-body);
    font-weight: 400;
    color: var(--t-body-color);
    line-height: var(--t-body-line-height);
    font-size: 16px;
  }

  .container {
    max-width: 1280px;
    // @media (min-width: 1470px) {
    //   max-width: 1450px;
    // }
  }

  img {
    max-width: 100%;
  }

  // ## End base

  // ## Typography

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    color: var(--t-heading-color);
    font-weight: var(--t-font-weight-heading);
    font-family: var(--t-font-family-heading);
  }

  h1,
  .h1 {
    font-size: 50px;
  }

  h2,
  .h2 {
    font-size: 40px;
  }

  h3,
  .h3 {
    font-size: 32px;
  }

  h4,
  .h4 {
    font-size: 28px;
  }

  h5,
  .h5 {
    font-size: 24px;
  }

  h6,
  .h6 {
    font-size: 20px;
  }

  a {
    color: var(--t-anchor-color);
    text-decoration: underline;
    &:hover,
    &:focus {
      text-decoration: underline;
      color: var(--t-anchor-hover-color);
    }
  }
  blockquote {
    border-left-color: var(--t-primary-branding-color);
  }
`;

const GlobalStyles = createGlobalStyle`
  ${Theme}
  ${Styles}
`;

export default GlobalStyles;
