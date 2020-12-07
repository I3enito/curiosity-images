import React, { useEffect } from "react";
import Image from "next/image";
import * as styles from "./ImageCard.styles.js";
import { css } from "@emotion/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { cardDistance } from "./constants.js";

export const ImageCard = ({ src, index, elementLength }) => {
  const { scrollY } = useViewportScroll();

  const differenceMotionValue = useTransform(
    scrollY,
    (value) => value - elementLength
  );

  const topPosition = useTransform(differenceMotionValue, [-50, 50], [0, 600], {
    // ease: [(t) => t],
  });

  return (
    <motion.div
      style={{
        translateX: "-50%",
        translateY: topPosition,
        translateZ: cardDistance * index * -1,
      }}
      css={styles.outerContainer(index)}
    >
      <Image
        src={src}
        alt="Picture of the author"
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
