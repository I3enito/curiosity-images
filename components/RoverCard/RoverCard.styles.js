import { css } from "@emotion/react";

export const cardContainer = () => css`
    margin: 0 auto;
    background-color: #111111;
    color: white;
    padding: 15px;
    border: 1px solid white;
    border-radius: 10px;
    width: 300px;

    .container {
        display: flex;
        flex-direction: column; 
    }
    .sub {
        margin-bottom: 10px;
        padding: 5px;
        width: fit-content;
        font-weight: 500;
    }

    .data {
        align-self: flex-end;
    }

    p {
        font-weight: 100;
        
    }

    .rover {
        align-self: center;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 30px;
    }

    .button {
        display: block;
        align-self: flex-end;
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
