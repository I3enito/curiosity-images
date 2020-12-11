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
            <h3 className="rover">{name}</h3>
            <div className="container">
                <div className="row">
                    <p className="sub">Images</p>
                    <p className="data">{images}</p>
                </div>
                <div className="row">
                    <p className="sub">Launch</p>
                    <p className="data">{dayjs(launch_date).format("DD MMMM YYYY")}</p>
                </div>
                <div className="row">
                    <p className="sub">Landing</p>
                    <p className="data">{dayjs(landing_date).format("DD MMMM YYYY")}</p>
                </div>
                <div className="row">
                    <p className="sub">Status</p>
                    <p className="data">{status}</p>
                </div>
            </div>

            <button onClick={onclick}>Select</button>
        </div>
    );
};
