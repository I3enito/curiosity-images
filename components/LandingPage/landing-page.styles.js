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
        padding: 15px;
        margin: 20px;
        margin-left: 10%;
        margin-right: 10%;
        width: fit-content;
        font-weight: 200;
        background-color: rgba(0, 0, 0, 0.3)
    }

    .fact h3 {
        text-align: center;
        font-weight: 200;
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
        height: 100%;
        background-color:rgba(0, 0, 0, 0.5);
    }
`;

export const motion = css`
    width: fit-content;
`;


