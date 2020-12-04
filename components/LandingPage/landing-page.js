import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIdleTimer } from "react-idle-timer";
import * as styles from "./landing-page.styles.js";
import { Menu } from "./../Menu/menu";
import { StaggerWrap } from "./../Stagger/Stagger.jsx";
import { FadeInFact } from "./../FadeInFact/FadeInFact";

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
        timeout: 5000,
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
    });

    const facts = [
        "Lorem ipsum",
        "Dolor sit amet",
        "Consectetur",
        "Adipisicing elit",
        "Soluta quis",
        "Voluptatibus",
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
            <div className="menuWrapper">
                <AnimatePresence>{active && <Menu></Menu>}</AnimatePresence>
            </div>

            {!active && (
                <motion.div
                    css={styles.motion}
                    initial={{ opacity: 0, color: "#FF5500" }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <StaggerWrap>
                        <ul className="factsWrapper">
                            {facts.map((item, key) => (
                                <FadeInFact
                                    key={key}
                                    className={"fact f" + key}
                                >
                                    <h2>{item}</h2>
                                </FadeInFact>
                            ))}
                        </ul>
                    </StaggerWrap>
                </motion.div>
            )}
        </div>
    );
};
