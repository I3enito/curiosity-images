import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import * as styles from "./configurator.styles.js";

function Configurator() {
    const router = useRouter();
    const [page, setPage] = useState("rover");
    const [rover, setRover] = useState("");
    const [cam, setCam] = useState("");

    const cameras = [
        "Front Hazard Avoidance Camera	",
        "Rear Hazard Avoidance Camera",
        "Mast Camera",
        "Chemistry and Camera Complex",
        "Mars Hand Lens Imager",
        "Mars Descent Imager",
        "Navigation Camera",
        "Panoramic Camera",
        "Miniature Thermal Emission Spectrometer (Mini-TES)",
    ];

    useEffect(() => {
        // Always do navigations after the first render
        router.push("configurator/?", undefined, { shallow: true });
    }, []);

    const selectCam = (rover) => {
        setRover(rover);
        setPage("cam");
        const href = `configurator/?counter=${rover}`;
        router.push(href, href, { shallow: true });
    };

    const cameraList = cameras.map((cam) => <li>{cam}</li>);

    return (
        <div css={styles.conf}>
            {page == "rover" && (
                <>
                    <h2 className="title">Select your Mars Rover</h2>
                    <button onClick={() => selectCam("curiousity")}>
                        Curiousity
                    </button>
                    <button onClick={() => selectCam("opportunity")}>
                        Opportunity
                    </button>
                    <button onClick={() => selectCam("spirit")}>Spirit</button>
                </>
            )}
            {page == "cam" && (
                <>
                    <ul
                        css={css`
                            color: white;
                        `}
                    >
                        {cameraList}
                    </ul>
                </>
            )}
        </div>
    );
}

export default Configurator;
