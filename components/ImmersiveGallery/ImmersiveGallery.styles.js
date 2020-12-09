import { css } from "@emotion/react";

export const outerContainer = (totalLength, fullScreenActive) => css`
  height: calc(${totalLength} * 1px + 100vh);
  ${fullScreenActive &&
  css`
    overflow-y: hidden;
  `}
`;

export const threeDimensionalContainer = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 150px;
  perspective-origin: 50% 25%;
  will-change: perspective-origin;
  transform: translate3d(0, 0, 0);
  background: radial-gradient(#000000ba, black);
`;

export const solIndicator = css`
  display: block;
  position: absolute;
  top: 40px;
  width: 100%;
  text-align: center;
`;

export const fullScreenOverlay = css`
  width: 100%;
  height: 100%;
`;

export const cameraPlane = css`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  transform-style: preserve-3d;
  will-change: transform;
`;
