import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIdleTimer } from "react-idle-timer";
import * as styles from "./landing-page.styles.js";
import { Menu } from "./../Menu/menu";

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
                    css={styles.motion}
                    initial={{ x: -20, y: 300, opacity: 0 }}
                    animate={{ x: 50, y: 300, color: "#FF5500", opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 4 }}
                >
                    <h1>Fact 1</h1>
                </motion.div>
            )}
        </div>
    );
};
