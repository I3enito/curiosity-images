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
  perspective: 130px;
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
  background: #00000030;
`;

export const cameraPlane = css`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  transform-style: preserve-3d;
  will-change: transform;
`;

export const informationContainer = css`
  position: absolute;
  bottom: 0;
  min-height: 80px;
  text-align: right;
  font-weight: 500;
  width: 100%;
  margin: auto;
  padding: 20px 20px;
  background-color: #00000096;

  & ul {
    width: 100%;
    margin: auto;

    @media (min-width: 640px) {
      max-width: 800px;
    }
  }

  & li {
    padding-bottom: 12px;
  }

  & span {
    float: left;
    margin-right: 24px;
    font-weight: 300;
  }
`;
