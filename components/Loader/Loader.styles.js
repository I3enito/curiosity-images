import { css, keyframes } from "@emotion/react";

const rotationKeyframes = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
    transform: rotate(360deg);
    }
`;

export const container = css`
  width: 40px;
  z-index: 100;
  animation: ${rotationKeyframes} 1.5s ease-in-out infinite;
`;
