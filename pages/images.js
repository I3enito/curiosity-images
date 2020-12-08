import { css } from "@emotion/react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { cardDistance } from "../components/ImageCard/constants";
import { ImageCard } from "../components/ImageCard/ImageCard";
import { fetcher } from "../utils/requests/fetcher";

function ImagesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sol, setSol] = useState(undefined);
  const [requestedFullscreenIndex, setRequestedFullscreenIndex] = useState(
    false
  );
  const [fullScreenActive, setFullScreenActive] = useState(false);
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/images`,
    fetcher
  );

  const createMouseDownHandler = (index) => () => {
    setRequestedFullscreenIndex(index);
  };

  const handleMouseUp = () => {
    setRequestedFullscreenIndex(undefined);
    setFullScreenActive(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (requestedFullscreenIndex) {
        setFullScreenActive(true);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [requestedFullscreenIndex]);

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

  const cameraPosition = useTransform(scrollY, (val) => val - cardDistance);

  return (
    <div>
      <h1>Images Page</h1>
      <div
        css={css`
          height: calc(${totalLength} * 1px + 100vh);
          ${fullScreenActive &&
          css`
            overflow-y: hidden;
          `}
        `}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
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
          <motion.h2
            // style={{ translateZ: headingTransform }}
            animate={controls}
            css={css`
              display: block;
              position: absolute;
              top: 120;
              width: 100%;
              text-align: center;
            `}
          >
            {fullScreenActive ? "active" : "inactive"}
          </motion.h2>
          {fullScreenActive && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                css={css`
                  width: 100%;
                  height: 100%;
                `}
              >
                <Image
                  src={data[requestedFullscreenIndex].img_src}
                  alt="Picture of the author"
                  layout="fill"
                  quality={80}
                  priority
                  loading="eager"
                  draggable={false}
                  objectFit="contain"
                ></Image>
              </motion.div>
            </AnimatePresence>
          )}
          <motion.div
            style={{ translateZ: cameraPosition }}
            css={css`
              position: absolute;
              top: 0;
              height: 100vh;
              width: 100%;
              transform-style: preserve-3d;
              will-change: transform;
            `}
          >
            <AnimatePresence>
              {imagesToShow &&
                !fullScreenActive &&
                imagesToShow.map((img, index) => {
                  const globalIndex =
                    index + (currentIndex === 0 ? 0 : currentIndex - 9);

                  const elementLength = globalIndex * cardDistance;
                  return (
                    <ImageCard
                      key={globalIndex}
                      uniqueKey={globalIndex}
                      src={img.img_src}
                      index={globalIndex}
                      elementLength={elementLength}
                      handleMouseDown={createMouseDownHandler(globalIndex)}
                      handleMouseUp={handleMouseUp}

                      // handleDoubleClick={() =>
                      //   setRequestedFullscreenIndex(globalIndex)
                      // }
                    ></ImageCard>
                  );
                })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ImagesPage;
