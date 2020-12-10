import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import * as styles from "./configurator.styles.js";

function Configurator() {
    const router = useRouter();
    const [page, setPage] = useState("rover");
    const [rover, setRover] = useState("");
    const [cam, setCam] = useState("");
    const [sol, setSol] = useState(0);

    useEffect(() => {
        // Always do navigations after the first render
        router.push("configurator", undefined, { shallow: true });
    }, []);

    // Rover selection
    const selectRover = (rover) => {
        setRover(rover);
        setPage("cam");
        const href = `configurator/?rover=${rover}`;
        router.push(href, href, { shallow: true });
    };

    // Cam selection
    const selectCam = (cam) => {
        setCam(cam);
        setPage("sol");
        const href = `configurator/?rover=${rover}&cam=${cam}`;
        router.push(href, href, { shallow: true });
    };
    const cameras = [
        "Front Hazard Avoidance Camera",
        "Rear Hazard Avoidance Camera",
        "Mast Camera",
        "Chemistry and Camera Complex",
        "Mars Hand Lens Imager",
        "Mars Descent Imager",
        "Navigation Camera",
        "Panoramic Camera",
        "Miniature Thermal Emission Spectrometer (Mini-TES)",
    ];
    const cameraList = cameras.map((cam) => (
        <button key={cam} onClick={() => selectCam(cam)}>{cam}</button>
    ));

    // Sol selection
    const selectSol = (sol) => {
        setSol(sol);
        setPage("end");
        const href = `configurator/?rover=${rover}&cam=${cam}&sol=${sol}`;
        router.push(href, href, { shallow: true });
    };

    const sols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const solList = sols.map((sol) => (
        <button key={sol.toString()} onClick={() => selectSol(sol)}>{sol}</button>
    ));

    return (
        <div css={styles.conf}>
            {page == "rover" && (
                <>
                    <h2 className="title">Select your Mars Rover</h2>
                    <button onClick={() => selectRover("curiousity")}>
                        Curiousity
                    </button>
                    <button onClick={() => selectRover("opportunity")}>
                        Opportunity
                    </button>
                    <button onClick={() => selectRover("spirit")}>
                        Spirit
                    </button>
                </>
            )}
            {page == "cam" && (
                <>
                    <h2 className="title">Select the camera of {rover}</h2>
                    <ul
                        css={css`
                            color: white;
                        `}
                    >
                        {cameraList}
                    </ul>
                </>
            )}
            {page == "sol" && (
                <>
                    <h2 className="title">Select the initial Sol</h2>
                    <ul
                        css={css`
                            color: white;
                        `}
                    >
                        {solList}
                    </ul>
                </>
            )}
            {page == "end" && (
                <>
                    <h2 className="title">Your Choice:</h2>
                    <div
                        css={css`
                            color: white;
                            margin: 40px auto;

                            p {
                                margin: 10px auto;
                                width: fit-content;
                            }
                        `}
                    >
                        <p>Rover: {rover}</p>
                        <p>Camera: {cam}</p>
                        <p>Sol: {sol}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Configurator;
