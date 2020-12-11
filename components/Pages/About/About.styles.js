import { css } from "@emotion/react";

export const about = css`
    background-color: #111111;
    height: 100vh;

    h1 {
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
        font-size: 30px;
        width: fit-content;
        font-weight: 800;
        padding-top: 80px;
        padding-bottom: 40px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 30px;

        @media (min-width: 360px) {
            font-size: 45px;
            padding-left: 30px;
            padding-right: 30px;
        }

        @media (min-width: 450px) {
            font-size: 60px;
            padding-left: 60px;
            padding-right: 60px;
        }

        @media (min-width: 850px) {
            font-size: 70px;
            padding-left: 100px;
            padding-right: 100px;
        }
    }

    p {
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
        font-size: 16px;
        width: fit-content;
        font-weight: 200;

        @media (min-width: 360px) {
            font-size: 22px;
            padding-left: 30px;
            padding-right: 30px;
        }

        @media (min-width: 450px) {
            font-size: 28px;
            padding-left: 60px;
            padding-right: 60px;
        }

        @media (min-width: 850px) {
            font-size: 35px;
            padding-left: 100px;
            padding-right: 100px;
            max-width: 1000px;
        }

    }
`;
