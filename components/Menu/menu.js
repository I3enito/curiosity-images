import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import * as styles from "./menu.styles.js";

export const Menu = () => (
        <div>
            <motion.div
                css={styles.motion}
                key="menu"
                initial={{ x: 0, opacity: 0, color: "#FF5500" }}
                animate={{ x: 50, opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                exit={{ x: 0, opacity: 0 }}
            >
                <div css={styles.menu}>
                    <h2>Menu</h2>
                    <motion.button
                        key="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href="/images">
                            <a>Start exploring</a>
                        </Link>
                    </motion.button>

                    <div css={styles.about}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                        <h3>Logo</h3>
                    </div>
                </div>
            </motion.div>
        </div>
    );
