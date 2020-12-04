import { css } from "@emotion/react";

export const landing = css`
    video {
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translateX(-50%) translateY(-50%);
        z-index: -10;
    }

    .factsWrapper {
        display: flex;
        flex-direction: column;
        position: absolute;
        align-items: flex-start;
        width: 100%;
    }

    .fact {
        padding: 20px;
        width: fit-content;
    }

    .f0, .f2, .f4 {
        align-self: flex-end;
    }

    .menuWrapper {
        display: flex;
        flex-direction: column;
        position: absolute;
        align-items: flex-start;
        width: 100%;
    }
`;

export const motion = css`
    width: fit-content;
`;


