import { css } from "@emotion/react";

export const menu = css`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;

    h1 {
        font-size: 30px;
        margin: 50px auto;
        width: fit-content;
        font-weight: 800;

        @media (min-width: 450px) {
            font-size: 60px;
        }

        @media (min-width: 850px) {
            font-size: 70px;
        }
    }

    p {
        font-size: 20px;
        margin: 80px auto;
        text-align: center;
        width: 80%;
        max-width: 600px;

        @media (min-width: 450px) {
            font-size: 25px;
        }

        @media (min-width: 850px) {
            font-size: 30px;
            margin: 100px auto;
        }
    }

    button {
        display: block;
        margin: 0 auto;
        border-radius: 0.12em;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid #ffffff;
        padding: 10px;
    }

    button a {
        font-size: 18px;
        @media (min-width: 450px) {
            font-size: 22px;
        }

        @media (min-width: 850px) {
            font-size: 25px;
        }
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
        color: #e87b81;
    }
`;
