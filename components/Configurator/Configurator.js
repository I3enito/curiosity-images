import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import * as styles from "./Configurator.styles.js";

function Configurator() {
    const router = useRouter();
    const [page, setPage] = useState("rover");
    const [rover, setRover] = useState("");
    const [cam, setCam] = useState("");
    const [sol, setSol] = useState(0);

    useEffect(() => {
        // Always do navigations after the first render
        router.push("configurator?page=rover", undefined, { shallow: true });
    }, []);

    const pages = {
        rover: "rover",
        cam: "cam",
        sol: "sol",
        end: "end",
    };

    useEffect(() => {
        // the page has changed
        setPage(router.query.page);
    }, [router.query.page]);

    useEffect(() => {
        // the rover has changed
        setRover(router.query.rover);
    }, [router.query.rover]);

    useEffect(() => {
        // the cam has changed
        setCam(router.query.cam);
    }, [router.query.cam]);

    useEffect(() => {
        // the sol has changed
        setSol(router.query.sol);
    }, [router.query.sol]);

    // Rover selection
    const selectRover = (rover) => {
        const path = `configurator/?page=${pages.cam}&rover=${rover}`;
        router.push(path, undefined, { shallow: true });
    };

    const rovers = [
        "Curiosity",
        "Opportunity",
        "Spirit"
    ];

    const roverlist = rovers.map((rover) => (
        <button key={rover} onClick={() => selectRover(rover)}>
            {rover}
        </button>
    ));

    // Cam selection
    const selectCam = (cam) => {
        const path = `configurator/?page=${pages.sol}&rover=${rover}&cam=${cam}`;
        router.push(path, undefined, { shallow: true });
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
        <button key={cam} onClick={() => selectCam(cam)}>
            {cam}
        </button>
    ));

    // Sol selection
    const selectSol = (sol) => {
        const href = `configurator/?page=${pages.end}&rover=${rover}&cam=${cam}&sol=${sol}`;
        router.push(href, href, { shallow: true });
    };

    const sols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const solList = sols.map((sol) => (
        <button key={sol.toString()} onClick={() => selectSol(sol)}>
            {sol}
        </button>
    ));

    return (
        <div css={styles.conf}>
            {page == "rover" && (
                <>
                    <h2 className="title">Select your Mars Rover</h2>
                    <ul
                        css={css`
                            color: white;
                        `}
                    >
                        {roverlist}
                    </ul>
                </>
            )}
            {page == "cam" && (
                <>
                    <h2 className="title">Select the Camera of {rover}</h2>
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
