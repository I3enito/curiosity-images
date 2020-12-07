import { css } from "@emotion/react";
import { motion, useElementScroll, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { cardDistance } from "../components/ImageCard/constants";
import { ImageCard } from "../components/ImageCard/ImageCard";
import { fetcher } from "../utils/requests/fetcher";

function ImagesPage() {
  const [imageCount, setImageCount] = useState(20);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/images`,
    fetcher
  );

  const isLoading = !data && !error;

  const totalImages = data && data.length;
  const totalLength = totalImages ? totalImages * cardDistance : 0;

  const imagesToShow = data
    ? data.slice(currentIndex === 0 ? 0 : currentIndex - 9, currentIndex + 20)
    : [];

  const { scrollY } = useViewportScroll();
  useEffect(() => {
    return scrollY.onChange((value) => {
      // console.log("value: " + value);
      // console.log(
      //   "condition: " + (imagesToShow.length * cardDistance - 20 * cardDistance)
      // );

      const currentIndex = Math.floor(value / cardDistance);
      console.log("currentIndex: " + currentIndex);

      console.log("conditioN: " + (currentIndex % 9));
      if (currentIndex % 9 === 0) {
        setCurrentIndex(currentIndex);
      }
    });
  }, [scrollY, imageCount]);

  return (
    <div>
      <h1>Images Page</h1>
      <div
        css={css`
          /* height: calc(
            ${imagesToShow ? imagesToShow.length - 1 : 0} * ${cardDistance} *
              1px + 100vh
          ); */
          height: calc(${totalLength} * 1px + 100vh);
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
              imagesToShow.map((img, index) => {
                const globalIndex =
                  index + (currentIndex === 0 ? 0 : currentIndex - 9);
                return (
                  <ImageCard
                    key={globalIndex}
                    src={img.img_src}
                    index={globalIndex}
                  ></ImageCard>
                );
              })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ImagesPage;
