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
        priority
        loading="eager"
        layout="responsive"
        height="200"
        width="200"
        quality={50}
        css={css`
          object-fit: cover;
        `}
      ></Image>
    </motion.div>
  );
};
