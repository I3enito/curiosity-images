import React, { useEffect } from "react";
import Image from "next/image";
import * as styles from "./ImageCard.styles.js";
import { css } from "@emotion/react";
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { cardDistance } from "./constants.js";

export const ImageCard = ({
  src,
  index,
  elementLength,
  handleMouseDown,
  handleMouseUp,
  uniqueKey,
}) => {
  const { scrollY } = useViewportScroll();

  const differenceMotionValue = useTransform(
    scrollY,
    (value) => value - elementLength
  );

  const topPosition = useTransform(
    differenceMotionValue,
    [150, 250],
    [0, 600],
    {
      // ease: [(t) => t],
    }
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        translateX: "-50%",
        translateY: topPosition,
        translateZ: cardDistance * index * -1,
      }}
      css={styles.outerContainer(index)}
      onMouseDown={handleMouseDown}
      draggable={false}
      onTouchStart={handleMouseDown}
      // onMouseUp={handleMouseUp}
      // onDoubleClick={handle}
    >
      <Image
        src={src}
        alt="Picture of the author"
        layout="responsive"
        height="200"
        width="200"
        quality={50}
        objectFit="cover"
        draggable={false}
      ></Image>
    </motion.div>
  );
};
