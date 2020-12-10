import { css } from "@emotion/react";

export const conf = css`
    background-color: #111111;
    height: 100vh;

    .title {
        margin: 0 auto;
        padding-top: 80px;
        padding-bottom: 40px;
        width: fit-content;
    }

    button {
        display: block;
        margin: 20px auto;
        padding: 0.35em 1.2em;
        border-radius: 0.12em;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid #ffffff;
        text-decoration: none;
        text-align: center;

        &:hover {
            color: #111111;
            background-color: #ffffff;
        }
    }
`;
