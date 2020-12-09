import React from "react";
import Image from "next/image";
import * as styles from "./ImageCard.styles.js";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import { cardDistance } from "./constants.js";

export const ImageCard = ({
  src,
  index,
  elementLength,
  handleMouseDown,
  handleMouseUp,
}) => {
  const { scrollY } = useViewportScroll();

  const differenceMotionValue = useTransform(
    scrollY,
    (value) => value - elementLength
  );

  const fadeOutTransform = useTransform(
    differenceMotionValue,
    [150, 250],
    [0, 600]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        translateX: "-50%",
        translateY: fadeOutTransform,
        translateZ: cardDistance * index * -1,
      }}
      css={styles.outerContainer(index)}
      onMouseDown={handleMouseDown}
      draggable={false}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseUp}
      onContextMenu={(event) => event.preventDefault()}
    >
      <Image
        src={src}
        alt="Image of the mars rover curiosity"
        layout="responsive"
        height="200"
        width="200"
        quality={25}
        objectFit="cover"
        draggable={false}
      ></Image>
    </motion.div>
  );
};
