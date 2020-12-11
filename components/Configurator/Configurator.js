import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import * as styles from "./Configurator.styles.js";
import { ImmersiveGallery } from "../ImmersiveGallery/ImmersiveGallery.js";
import { fetcher } from "../../utils/requests/fetcher";
import { RoverCard } from "./../RoverCard/RoverCard";
import { Loader } from "../Loader/Loader";
import { CameraCard } from "../CameraCard/CameraCard.js";

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

    // data fetching
    const { data: roverInformation, error: roverError } = useSWR(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/rovers`,
        fetcher
    );
    const roverIsLoading = !roverInformation && !roverError;

    const { data: cameras, error: camerasError } = useSWR(
        () =>
            rover &&
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/cameras?rover=${rover}`,
        fetcher
    );
    const camerasIsLoading = !cameras && !camerasError;

    const { data: availableSols, error: availableSolsError } = useSWR(
        () =>
            rover &&
            cam &&
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/images/available-sols?rover=${rover}&camera=${cam}`,
        fetcher
    );
    const availableSolsIsLoading = !availableSols && !availableSolsError;

    // Rover selection
    const selectRover = (rover) => {
        const path = `configurator/?page=${PAGE_CAM}&rover=${rover}`;
        router.push(path, undefined, { shallow: true });
    };

    // Cam selection
    const selectCam = (cam) => {
        const path = `configurator/?page=${PAGE_SOL}&rover=${rover}&cam=${cam}`;
        router.push(path, undefined, { shallow: true });
    };

    // Sol selection
    const selectSol = (sol) => {
        const href = `configurator/?page=${PAGE_END}&rover=${rover}&cam=${cam}&sol=${sol}`;
        router.push(href, href, { shallow: true });
    };

    return (
        <>
            {page !== "end" && (
                <div css={styles.conf}>
                    {page == "rover" && roverInformation && (
                        <>
                            <h2 className="title">Select your Mars Rover</h2>
                            <ul
                                css={css`
                                    color: white;
                                    background-color: #111111;
                                    padding-bottom: 50px;
                                `}
                            >
                                {roverIsLoading && (
                                    <>
                                        <motion.div
                                            key="loader"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            css={css`
                                                position: absolute;
                                                top: 50%;
                                                left: 50%;
                                                text-align: center;
                                                display: block;
                                                transform: translate(
                                                    -50%,
                                                    -50%
                                                );
                                            `}
                                        >
                                            <Loader
                                                css={css`
                                                    margin-bottom: 120px;
                                                    margin: 0 auto 40px;
                                                `}
                                            ></Loader>
                                            <motion.h3>
                                                Loading rover data...
                                            </motion.h3>
                                        </motion.div>
                                    </>
                                )}
                                {roverInformation &&
                                    roverInformation.map((rover) => (
                                        <RoverCard
                                            key={rover.id}
                                            name={rover.name}
                                            images={rover.image_count}
                                            landing_date={rover.landing_date}
                                            launch_date={rover.launch_date}
                                            status={rover.status}
                                            onclick={() =>
                                                selectRover(rover.name)
                                            }
                                        ></RoverCard>
                                    ))}
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
                                    background-color: #111111;
                                    padding-bottom: 50px;
                                `}
                            >
                                {camerasIsLoading && (
                                    <>
                                        <motion.div
                                            key="loader"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            css={css`
                                                position: absolute;
                                                top: 50%;
                                                left: 50%;
                                                text-align: center;
                                                display: block;
                                                transform: translate(
                                                    -50%,
                                                    -50%
                                                );
                                            `}
                                        >
                                            <Loader
                                                css={css`
                                                    margin-bottom: 120px;
                                                    margin: 0 auto 40px;
                                                `}
                                            ></Loader>
                                            <motion.h3>
                                                Loading camera data...
                                            </motion.h3>
                                        </motion.div>
                                    </>
                                )}
                                {cameras &&
                                    cameras.map((cam) => (
                                        <CameraCard
                                            key={cam.id}
                                            name={cam.full_name}
                                            images={cam.image_count}
                                            onclick={() => selectCam(cam.name)}
                                        ></CameraCard>
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
                                    background-color: #111111;
                                    padding-bottom: 50px;
                                    button {
                                        width: 100px;
                                        text-align: center;
                                    }
                                `}
                            >
                                {availableSolsIsLoading && (
                                    <>
                                        <motion.div
                                            key="loader"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            css={css`
                                                position: absolute;
                                                top: 50%;
                                                left: 50%;
                                                text-align: center;
                                                display: block;
                                                transform: translate(
                                                    -50%,
                                                    -50%
                                                );
                                            `}
                                        >
                                            <Loader
                                                css={css`
                                                    margin-bottom: 120px;
                                                    margin: 0 auto 40px;
                                                `}
                                            ></Loader>
                                            <motion.h3>
                                                Loading sol data...
                                            </motion.h3>
                                        </motion.div>
                                    </>
                                )}
                                {availableSols &&
                                    availableSols.map((sol) => (
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
                    initialSol={parseInt(sol)}
                    cameraName={cam}
                    roverName={rover}
                ></ImmersiveGallery>
            )}
        </>
    );
}

export default Configurator;
