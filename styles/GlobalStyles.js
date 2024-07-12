"use client";
import { createGlobalStyle, css } from "styled-components";
import Theme from "./Theme";

const Styles = css``;

const GlobalStyles = createGlobalStyle`
  ${Theme}
  ${Styles}
`;

export default GlobalStyles;
