import { css } from "@emotion/react";
import {
  motion,
  useAnimation,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { cardDistance } from "../components/ImageCard/constants";
import { ImageCard } from "../components/ImageCard/ImageCard";
import { fetcher } from "../utils/requests/fetcher";

function ImagesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sol, setSol] = useState(undefined);
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/images`,
    fetcher
  );

  const isLoading = !data && !error;

  const controls = useAnimation();

  const totalImages = data && data.length;
  const totalLength = totalImages ? totalImages * cardDistance : 0;

  const imagesToShow = data
    ? data.slice(currentIndex === 0 ? 0 : currentIndex - 9, currentIndex + 20)
    : [];

  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange((value) => {
      const currentIndex = Math.floor(value / cardDistance);
      const currentSol = data && data[currentIndex].sol;
      if (sol !== currentSol) {
        setSol(currentSol);
        controls.start({
          scale: 1,
          transition: {
            type: "spring",
            velocity: 10,
            stiffness: 700,
            damping: 80,
          },
        });
      }

      if (currentIndex % 9 === 0) {
        setCurrentIndex(currentIndex);
      }
    });
  }, [scrollY, data, sol]);

  useEffect(() => {
    return () => {
      const velocity = scrollY.getVelocity();
      console.log(velocity);
    };
  }, [scrollY]);

  useEffect(() => {});

  const headingTransform = useTransform(scrollY, (val) => val * -1);

  return (
    <div>
      <h1>Images Page</h1>
      <div
        css={css`
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
            background: radial-gradient(#000000ba, black);
          `}
        >
          <motion.h2
            // style={{ translateZ: headingTransform }}
            animate={controls}
            css={css`
              display: block;
              position: absolute;
              top: 40px;
              width: 100%;
              text-align: center;
            `}
          >
            Sol: {sol}
          </motion.h2>
          <motion.div
            style={{ translateZ: scrollY }}
            css={css`
              position: absolute;
              top: 0;
              height: 100vh;
              width: 100%;
              transform-style: preserve-3d;
              will-change: transform;
            `}
          >
            {imagesToShow &&
              imagesToShow.map((img, index) => {
                const globalIndex =
                  index + (currentIndex === 0 ? 0 : currentIndex - 9);

                const elementLength = globalIndex * cardDistance;
                return (
                  <ImageCard
                    key={globalIndex}
                    src={img.img_src}
                    index={globalIndex}
                    elementLength={elementLength}
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
