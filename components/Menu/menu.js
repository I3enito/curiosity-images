import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import * as styles from "./menu.styles.js";

export const Menu = () => (
            <motion.div
                css={styles.motion}
                key="menu"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 30, opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                exit={{ x: 0, opacity: 0 }}
            >
                <div css={styles.menu}>
                    <h2>curious.images</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
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
                        <h3 className="logo">Logo</h3>
                    </div>
                </div>
            </motion.div>
    );
