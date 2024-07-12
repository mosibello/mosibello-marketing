import { css } from "styled-components";

const Theme = css`
  :root {
    // Theme colors
    --t-primary-branding-color: #780df2;
    --t-primary-branding-hover-color: #670bd1;
    --t-secondary-branding-color: #0d253a;
    --t-secondary-branding-hover-color: #081724;
    // Buttons
    --t-button-padding: 0.7rem 1.6rem;
    --t-button-border-radius: 8px;
    // Typography
    --t-heading-color: #242424;
    --t-body-color: #242424;
    --t-anchor-color: var(--t-primary-branding-color);
    --t-anchor-hover-color: var(--t-primary-branding-hover-color);
    --t-heading-line-height: 1.3;
    --t-body-line-height: 1.6;
    --t-font-family-heading: "Inter", sans-serif;
    --t-font-family-body: "Inter", sans-serif;
    // Form
    --t-form-title-color: var(--t-primary-branding-color);
    --t-form-label-color: #25282a;
    --t-form-help-text-color: var(--t-body-color);
    --t-form-input-box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    --t-form-input-border-radius: 4px;
    --t-form-input-focus-border-color: var(--t-primary-branding-color);
    --t-form-input-border-color: #a8a9ab;
    --t-form-placeholder-color: #a8a9ab;
    // Box shadows
    --t-box-shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
    --t-box-shadow-sm: 0px 1px 3px rgba(16, 24, 40, 0.1),
      0px 1px 2px rgba(16, 24, 40, 0.06);
    --t-box-shadow-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    --t-box-shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    --t-box-shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    --t-box-shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
    --t-box-shadow-3xl: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
    // Misc
    --t-border-color: #eee;
    --t-light-section-color: #eee;
    --t-global-card-border-radius: 8px;
    --t-global-image-border-radius: 16px;
    // Blobs
    --t-blob-color-1: var(--t-primary-branding-color);
    --t-blob-color-2: #28ffea;
    --t-blob-color-3: #2897ff;
    --t-blob-color-4: #ff28b8;

    // Palette
    --t-cp-base-white: #fff;
  }

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
    font-weight: 700;
    font-family: var(--t-font-family-heading);
  }

  h1,
  .h1 {
    font-size: 40px;
  }

  h2,
  .h2 {
    font-size: 32px;
  }

  h3,
  .h3 {
    font-size: 28px;
  }

  h4,
  .h4 {
    font-size: 24px;
  }

  h5,
  .h5 {
    font-size: 20px;
  }

  h6,
  .h6 {
    font-size: 18px;
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

export default Theme;
