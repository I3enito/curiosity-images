import { css } from "@emotion/react";
import { cardDistance } from "./constants";

export const outerContainer = (index) => css`
  background: #c4c4c4;
  width: 100%;
  height: auto;
  border-radius: 4px;
  overflow: hidden;
  transform-style: preserve-3d;

  position: absolute;
  display: block;
  width: 100%;
  top: 40%;
  left: 50%;
  @media only screen and (min-width: 600px) {
    width: 45%;
  }
  /* transform: translate3D(-50%, 0, calc(${cardDistance} * ${index} * -1px)); */
`;
