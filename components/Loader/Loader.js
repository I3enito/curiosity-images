import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { css, keyframes } from "@emotion/react";
import * as styles from "./Loader.styles.js";

export const Loader = ({ className }) => {
  return (
    <motion.div className={className} css={styles.container}>
      <Image
        src="/icons/mars.png"
        priority
        loading="eager"
        alt="Mars icon"
        layout="responsive"
        height="400"
        width="400"
        objectFit="cover"
        draggable={false}
      ></Image>
    </motion.div>
  );
};
