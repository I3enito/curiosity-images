import React from "react";
import * as styles from "./RoverCard.styles.js";

export const RoverCard = ({
    name,
    images,
    landing_date,
    launch_date,
    status,
    onclick,
}) => {
    return (
        <div css={styles.cardContainer}>
            <h3>{name}</h3>
            <p>Images: {images}</p>
            <p>Landing Date: {landing_date}</p>
            <p>Launch Date: {launch_date}</p>
            <p>Status: {status}</p>
            <button onClick={onclick}>Select</button>
        </div>
    );
};
