import { css } from "@emotion/react";

export const help = css`
    background-color: #111111;
    padding-bottom: 50px;
    height: 100vh;

    p,
    h1,
    h2,
    h5 {
        padding-top: 30px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
        width: fit-content;

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
            font-size: 40px;
            padding-left: 30px;
            padding-right: 30px;
        }

        @media (min-width: 450px) {
            font-size: 50px;
            padding-left: 60px;
            padding-right: 60px;
        }

        @media (min-width: 850px) {
            font-size: 60px;
            padding-left: 100px;
            padding-right: 100px;
        }
    }

    p {
        font-size: 16px;
        font-weight: 200;
        @media (min-width: 360px) {
            font-size: 22px;
        }

        @media (min-width: 450px) {
            font-size: 26px;
        }

        @media (min-width: 850px) {
            font-size: 30px;
        }
    }

    h5 {
        font-size: 22px;
        font-weight: 300;
        @media (min-width: 360px) {
            font-size: 25px;
        }

        @media (min-width: 450px) {
            font-size: 30px;
        }

        @media (min-width: 850px) {
            font-size: 35px;
        }
    }

    h2 {
        font-size: 27px;
        font-weight: 400;
        @media (min-width: 360px) {
            font-size: 30px;
        }

        @media (min-width: 450px) {
            font-size: 35px;
        }

        @media (min-width: 850px) {
            font-size: 40px;
        }
    }
`;
