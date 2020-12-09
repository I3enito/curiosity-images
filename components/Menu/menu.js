import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as styles from "./menu.styles.js";

export const Menu = () => (
    <motion.div
        key="menu"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 30, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        exit={{ x: 0, opacity: 0 }}
    >
        <div css={styles.menu}>
            <h1>curious.images</h1>
            <p>
                Für Weltraumenthusiasten ist curious.image der Ort, wo der
                Planet Mars visuell erforscht werden kann. Gegenüber bestehenden
                Scienceplattformen bieten wir einen minimalistischen und
                einfachen Zugang zu den unzähligen Fotogarfien vom Mars Rover
                Curiousity.
            </p>
            <motion.button
                key="button"
                whileHover={{ scale: 1.2, backgroundColor: "#E87B81" }}
                whileTap={{ scale: 0.8 }}
            >
                <Link href="/images">
                    <a>Start exploring</a>
                </Link>
            </motion.button>

            <div css={styles.about}>
                <Link href="/about">
                    <a className="link">About</a>
                </Link>
            </div>
        </div>
    </motion.div>
);
