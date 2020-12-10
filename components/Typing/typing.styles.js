import { css } from "@emotion/react";

export const typing = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 30px;
    text-align: center;

    .typer {
        font-size: 50px;
        @media (max-width: 300px) {
            font-size: 40px;
        }
        @media (min-width: 1000px) {
            font-size: 70px;
        }
        @media (min-width: 1200px) {
            font-size: 85px;
        }
    }
`;
