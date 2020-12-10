import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { css } from "@emotion/react";
import * as styles from "./Configurator.styles.js";
import { ImmersiveGallery } from "../ImmersiveGallery/ImmersiveGallery.js";
import { fetcher } from "../../utils/requests/fetcher";
import { RoverCard } from "./../RoverCard/RoverCard";

const PAGE_ROVER = "rover";
const PAGE_CAM = "cam";
const PAGE_SOL = "sol";
const PAGE_END = "end";

function Configurator() {
    const router = useRouter();
    const [page, setPage] = useState(PAGE_ROVER);
    const [rover, setRover] = useState("");
    const [cam, setCam] = useState("");
    const [sol, setSol] = useState(0);

    useEffect(() => {
        setPage(router.query.page);
        setCam(router.query.cam);
        setRover(router.query.rover);
        setSol(router.query.sol);
    }, [router.query]);

    // Rover selection
    const selectRover = (rover) => {
        const path = `configurator/?page=${PAGE_CAM}&rover=${rover}`;
        router.push(path, undefined, { shallow: true });
    };
    const fetchRoverImages = () => {
        const { data, error } = useSWR(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/images/count/rover?rover=Curiosity`,
            fetcher
        );
        return data;
    };
    const roverImages = fetchRoverImages();

    const fetchRoverInfos = () => {
        const { data, error } = useSWR(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/rovers/info?rover=Curiosity`,
            fetcher
        );
        return data;
    };
    const roverInfos = fetchRoverInfos();
    console.log(roverInfos);

    // Cam selection
    const selectCam = (cam) => {
        const path = `configurator/?page=${PAGE_SOL}&rover=${rover}&cam=${cam}`;
        router.push(path, undefined, { shallow: true });
    };
    const fetchCameras = () => {
        const { data, error } = useSWR(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/cameras?rover=Curiosity`,
            fetcher
        );
        return data;
    };
    const cameras = fetchCameras();

    const fetchCameraImages = (camera) => {
        const { data, error } = useSWR(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/images/count/camera?rover=Curiosity&camera=${camera}`,
            fetcher
        );
        return data;
    };
    // const fhza = fetchCameraImages("FHAZ");
    // const navcam = fetchCameraImages("NAVCAM");
    // console.log(navcam.fhza);

    // Sol selection
    const selectSol = (sol) => {
        const href = `configurator/?page=${PAGE_END}&rover=${rover}&cam=${cam}&sol=${sol}`;
        router.push(href, href, { shallow: true });
    };

    const fetchSols = () => {
        const { data, error } = useSWR(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/images/available-sols?rover=${rover}&camera=${cam}`,
            fetcher
        );
        return data;
    };
    const sols = fetchSols();

    return (
        <>
            {page !== "end" && (
                <div css={styles.conf}>
                    {page == "rover" && roverImages && (
                        <>
                            <h2 className="title">Select your Mars Rover</h2>
                            <ul
                                css={css`
                                    color: white;
                                `}
                            >
                                {/* <button
                                    onClick={() => selectRover("Curiosity")}
                                >
                                    Curiosity
                                    {" | Images: " + roverImages.count}
                                </button> */}
                                <RoverCard
                                    name={roverInfos.name}
                                    images={roverImages.count}
                                    landing_date={roverInfos.landing_date}
                                    launch_date={roverInfos.launch_date}
                                    status={roverInfos.status}
                                    onclick={() => selectRover("Curiosity")}
                                ></RoverCard>
                            </ul>
                        </>
                    )}
                    {page == "cam" && (
                        <div
                            css={css`
                                height: 100px;
                            `}
                        >
                            <h2 className="title">
                                Select the Camera of {rover}
                            </h2>
                            <ul
                                css={css`
                                    color: white;
                                `}
                            >
                                {cameras &&
                                    cameras.map((cam) => (
                                        <button
                                            key={cam.id}
                                            onClick={() => selectCam(cam.name)}
                                        >
                                            {cam.full_name}
                                        </button>
                                    ))}
                            </ul>
                        </div>
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
                                {sols &&
                                    sols.map((sol) => (
                                        <button
                                            key={sol.index}
                                            onClick={() => selectSol(sol)}
                                        >
                                            {sol}
                                        </button>
                                    ))}
                            </ul>
                        </>
                    )}
                </div>
            )}

            {page === "end" && (
                <ImmersiveGallery
                    initialSol={sol}
                    cameraName={cam}
                    roverName={rover}
                ></ImmersiveGallery>
            )}
        </>
    );
}

export default Configurator;
