import { css } from "@emotion/react";

export const conf = css`
    background-color: #111111;
    height: 100vh;

    .title {
        margin: 0 auto;
        text-align: center;
        font-size: 30px;
        width: fit-content;
        font-weight: 800;
        padding-top: 80px;
        padding-bottom: 40px;
        padding-left: 20px;
        padding-right: 20px;
        width: fit-content;
        font-size: 30px;

        @media (min-width: 360px) {
            font-size: 45px;
        }

        @media (min-width: 450px) {
            font-size: 60px;
        }

        @media (min-width: 850px) {
            font-size: 70px;
        }
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
        width: 170px;
        cursor: pointer;

        &:hover {
            color: #111111;
            background-color: #ffffff;
            box-shadow: 0 5px 5px -3px  #e87b81;
        }

        &:focus {
            outline: 0;
        }

        @media (min-width: 360px) {
            width: 250px;
        }

        @media (min-width: 450px) {
            width: 300px;
        }

        @media (min-width: 850px) {
            width: 400px;
        }
    }
`;
