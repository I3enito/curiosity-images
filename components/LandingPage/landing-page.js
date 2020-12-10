import React, { useState } from "react";
import { css } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";
import { useIdleTimer } from "react-idle-timer";
import * as styles from "./landing-page.styles.js";
import { Menu } from "./../Menu/menu";
import { Typing } from "./../Typing/typing";

export const LandingPage = () => {
    const [active, setActive] = useState(false);

    const handleOnIdle = (event) => {
        setActive(false);
    };

    const handleOnActive = (event) => {
        setActive(true);
    };

    const handleOnAction = (e) => {
        setActive(true);
    };

    useIdleTimer({
        timeout: 2000,
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
    });

    const facts = [
        "Curiosity is about 3 metres long",
        "On the mars since 8 years",
        "Equipped with a radioisotope power system",
        "Snapped a 1.8 billion-pixel panorama",
        "Carries 17 cameras",
        "Sent over 468,926 images back to Earth",
    ];
    return (
        <div css={styles.landing}>
            <video
                autoPlay
                muted
                loop
                src="/landing.mp4"
                type="video/mp4"
            ></video>

            <AnimatePresence>{active && <Menu></Menu>}</AnimatePresence>

            {!active && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <Typing strings={facts}></Typing>
                </motion.div>
            )}
        </div>
    );
};
