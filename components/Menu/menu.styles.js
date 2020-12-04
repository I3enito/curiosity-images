import { css } from "@emotion/react";

export const menu = css`
    color: #eeeeee;
    min-width: 100px;
    margin: 0 auto;

    h1 {
        margin: 0 auto;
        width: fit-content;
        font-weight: 800;
        margin-bottom: 30%;
        margin-top: 20%;
        font-size: 48px;
    }

    p {
        margin: 40px auto;
        text-align: center;
        width: 80%;
        margin-bottom: 20%;
        max-width: 600px;
    }

    button {
        display: block;
        margin: 0 auto;
        border-radius: 0.12em;
        color: #eeeeee;
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid #eeeeee;
        padding: 10px;
    }
`;

export const about = css`
    .link,
    .logo {
        display: block;
        margin: 40px auto;
        width: fit-content;
    }

    .link:hover {
        color: #E87B81
    }
`;

export const motion = css`
    width: fit-content;
    align-self: center;
`;
