import React from "react";
import dayjs from "dayjs";
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
            <div className="container">
                <h3 className="rover">{name}</h3>
                <p className="item sub">Images</p>
                <p className="item data">{images}</p>
                <p className="item sub">Launch</p>
                <p className="item data">
                    {dayjs(launch_date).format("DD MMMM YYYY")}
                </p>
                <p className="item sub">Landing</p>
                <p className="item data">
                    {dayjs(landing_date).format("DD MMMM YYYY")}
                </p>
                <p className="item sub">Status</p>
                <p className="item data">{status}</p>
                <button className="button" onClick={onclick}>Select</button>
            </div>
        </div>
    );
};
