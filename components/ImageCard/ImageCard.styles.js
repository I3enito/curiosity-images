import { css } from "@emotion/react";

export const outerContainer = (index) => css`
  background: #c4c4c445;
  width: 100%;
  height: auto;
  border-radius: 4px;
  overflow: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  min-height: 44vw;

  position: absolute;
  display: block;
  width: 100%;
  top: 40%;
  left: 50%;
  @media only screen and (min-width: 600px) {
    width: 45%;
  }
`;
