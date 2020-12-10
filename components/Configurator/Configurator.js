import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import * as styles from "./Configurator.styles.js";
import { ImmersiveGallery } from "../ImmersiveGallery/ImmersiveGallery.js";
import { rovers, pages } from "../../utils/constants";

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
    // console.log(Object.entries(rovers))
    // let roverArray = [];
    // for (let rover in rovers) {
    //     console.log(rover)
    //     roverArray.push(rover)
    // }
    const roverlist = rovers.map((rover) => (
        <button key={rover.name} onClick={() => selectRover(rover.name)}>
            {rover.name}
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
    let roverObject = rovers.find(r => r.name === rover)
    console.log(roverObject)
    let cameraList;
    if (roverObject) {
        cameraList = roverObject.cams.map((cam) => (
            <button key={cam.value} onClick={() => selectCam(cam.value)}>
                {cam.name}
            </button>
        ));
    }

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
        <>
            {page !== "end" && (
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
                            <h2 className="title">
                                Select the Camera of {rover}
                            </h2>
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
                                    button {
                                        width: 100px;
                                        text-align: center;
                                    }
                                `}
                            >
                                {solList}
                            </ul>
                        </>
                    )}
                </div>
            )}

            {page === "end" && (
                <ImmersiveGallery
                    initialSol={sol}
                    cameraName="NAVCAM"
                    roverName={rover}
                ></ImmersiveGallery>
            )}
        </>
    );
}

export default Configurator;
