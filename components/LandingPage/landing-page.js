import React from "react";
import { motion } from "framer-motion";
import * as styles from "./landing-page.styles.js";

export const LandingPage = () => {
    return (
        <div css={styles.landing}>
            <video
                autoPlay
                muted
                loop
                src="/landing.webm"
                type="video/webm"
            ></video>
            <motion.div css={styles.motion} initial={{x: -20, y: 300, opacity: 0}} animate={{ x: 800, y: 300, color: "#FF5500", opacity: 1}} transition={{ ease: "easeOut", duration: 4 }}>
                <h1>Hello</h1>
            </motion.div>
        </div>
    );
}
