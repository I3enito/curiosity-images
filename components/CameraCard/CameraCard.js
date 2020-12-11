import React from "react";
import * as styles from "./CameraCard.styles.js";

export const CameraCard = ({
    name,
    images,
    onclick
}) => {
    return (
        <div css={styles.cardContainer}>
            <div className="container">
                <h3 className="name">{name}</h3>
                <p className="item">Available Images: {images}</p>
                <button className="button" onClick={onclick}>Select</button>
            </div>
        </div>
    );
};
