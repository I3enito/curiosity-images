import { css } from "@emotion/react";
import { motion, useElementScroll, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { cardDistance } from "../components/ImageCard/constants";
import { ImageCard } from "../components/ImageCard/ImageCard";
import { fetcher } from "../utils/requests/fetcher";

function ImagesPage() {
  const [imageCount, setImageCount] = useState(20);
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/images`,
    fetcher
  );

  const isLoading = !data && !error;

  const imagesToShow = data ? data.slice(0, imageCount) : [];

  const { scrollY, scrollYProgress } = useViewportScroll();
  useEffect(() => {
    return scrollY.onChange((value) => {
      console.log("value: " + value);
      console.log(
        "condition: " + (imagesToShow.length * cardDistance - 20 * cardDistance)
      );
      if (
        imagesToShow &&
        value > imagesToShow.length * cardDistance - 10 * cardDistance
      ) {
        setImageCount(imageCount + 10);
      }
    });
  }, [scrollY, imageCount]);

  return (
    <div>
      <h1>Images Page</h1>
      <div
        css={css`
          height: calc(
            ${imagesToShow ? imagesToShow.length - 1 : 0} * ${cardDistance} *
              1px + 100vh
          );
        `}
      >
        <div
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            perspective: 150px;
            perspective-origin: 50% 25%;
            will-change: perspective-origin;
            transform: translate3d(0, 0, 0);
          `}
        >
          <motion.div
            style={{ translateZ: scrollY }}
            css={css`
              position: absolute;
              top: 0;
              height: 100vh;
              width: 100%;
              transform-style: preserve-3d;
              transform: translateZ(calc(${scrollY} * 1px));
              will-change: transform;
            `}
          >
            {imagesToShow &&
              imagesToShow.map((img, index) => (
                <ImageCard
                  key={index}
                  src={img.img_src}
                  index={index}
                ></ImageCard>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ImagesPage;
