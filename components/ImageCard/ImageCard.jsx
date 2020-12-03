import React from "react";
import Image from "next/image";
import * as styles from "./ImageCard.styles.js";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

export const ImageCard = ({ src, index }) => {
  return (
    <motion.div css={styles.outerContainer(index)}>
      <Image
        src={src}
        alt="Picture of the author"
        preload="true"
        layout="responsive"
        height="400"
        width="400"
        css={css`
          object-fit: cover;
        `}
      ></Image>
    </motion.div>
  );
};
