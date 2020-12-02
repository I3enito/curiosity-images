import React from "react";
import Image from "next/image";
import * as styles from "./ImageCard.styles.js";
import { css } from "@emotion/react";

export const ImageCard = ({ src }) => {
  return (
    <div css={styles.outerContainer}>
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
    </div>
  );
};
