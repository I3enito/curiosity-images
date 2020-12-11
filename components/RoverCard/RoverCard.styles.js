import { css } from "@emotion/react";

export const cardContainer = () => css`
    margin: 0 auto;
    background-color: #111111;
    color: white;
    padding: 20px;
    border: 1px solid white;
    border-radius: 10px;
    width: 500px;

    .container {
        display: flex;
    }

    .row {
        flex: 50%;
    }

    .sub {
        text-align: center;
        margin-bottom: 10px;
    }

    .data {
        text-align: center;
    }

    p {
        font-weight: 100;
        
    }

    .rover {
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 30px;
    }

    button {
        display: block;
        margin: 10px auto;
        border-radius: 0.12em;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid #ffffff;
        text-decoration: none;
        text-align: center;
        width: 100px;

        &:hover {
            color: #111111;
            background-color: #ffffff;
            box-shadow: 0 5px 5px -3px #e87b81;
        }

        &:focus {
            outline: 0;
        }
    }
`;
