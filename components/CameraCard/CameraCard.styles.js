import { css } from "@emotion/react";

export const cardContainer = () => css`
    margin: 10px auto;
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

    .item {
        align-self: center;
    }

    p {
        font-weight: 100;
        
    }

    .name {
        align-self: center;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 25px;
        text-align: center;
    }

    .button {
        margin-top: 20px;
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
