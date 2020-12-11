import {
  AnimatePresence,
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { cardDistance } from "../ImageCard/constants";
import { ImageCard } from "../ImageCard/ImageCard";
import { fetcher } from "../../utils/requests/fetcher";
import * as styles from "./ImmersiveGallery.styles.js";
import { Loader } from "../Loader/Loader";
import { css } from "@emotion/react";
import dayjs from "dayjs";

export const ImmersiveGallery = ({ initialSol, cameraName, roverName }) => {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sol, setSol] = useState(0);
  const [requestedFullscreenIndex, setRequestedFullscreenIndex] = useState(
    false
  );
  const [fullScreenActive, setFullScreenActive] = useState(false);

  // data fetching
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/images?rover=${roverName}&camera=${cameraName}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const isLoading = !data && !error;
  const totalImages = data && data.length;
  const totalLength = totalImages ? totalImages * cardDistance : 0;

  const startIndex = data && data.findIndex((el) => el.sol === initialSol);
  
  const imagesToShow = data
    ? data.slice(currentIndex === 0 ? 0 : currentIndex - 9, currentIndex + 20)
    : [];

  //handlers
  const createMouseDownHandler = (index) => () => {
    setRequestedFullscreenIndex(index);
  };
  const handleMouseUp = () => {
    setRequestedFullscreenIndex(undefined);
    setFullScreenActive(false);
  };
  // animation controls
  const controls = useAnimation();

  // respond to fullscreen request
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (requestedFullscreenIndex) {
        setFullScreenActive(true);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [requestedFullscreenIndex]);

  // scroll logic
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    if (startIndex >= 0) {
      window.scroll(0, startIndex * cardDistance);
    }
  }, [startIndex]);

  useEffect(() => {
    return scrollY.onChange((value) => {
      const calculatedIndex = Math.floor(value / cardDistance);
      const currentSol = data && data[calculatedIndex]?.sol;
      if (currentSol && sol !== currentSol) {
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

      if (calculatedIndex % 9 === 0) {
        setCurrentIndex(calculatedIndex);
      } else if (Math.abs(calculatedIndex - currentIndex) > 10) {
        setCurrentIndex(calculatedIndex - (calculatedIndex % 9));
      }
    });
  }, [scrollY, data, sol, currentIndex]);

  const cameraPosition = useTransform(scrollY, (val) => val - cardDistance);

  return (
    <div
      css={styles.outerContainer(totalLength, fullScreenActive)}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onTouchCancel={handleMouseUp}
    >
      <div css={styles.threeDimensionalContainer}>
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              css={css`
                position: absolute;
                top: 50%;
                left: 50%;
                text-align: center;
                display: block;
                transform: translate(-50%, -50%);
              `}
            >
              <Loader
                css={css`
                  margin-bottom: 120px;
                  margin: 0 auto 40px;
                `}
              ></Loader>
              <motion.h3>Loading rover data...</motion.h3>
            </motion.div>
          )}
          {sol && (
            <motion.h2
              key="solIndicator"
              animate={controls}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              css={styles.solIndicator}
            >
              Sol: {sol}
            </motion.h2>
          )}

          {fullScreenActive && (
            <motion.div
              key="fullscreenOverlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              css={styles.fullScreenOverlay}
              onTouchEnd={handleMouseUp}
              onTouchCancel={handleMouseUp}
            >
              <Image
                src={data[requestedFullscreenIndex].img_src}
                className={css`
                  background-color: red;
                `}
                alt="Picture of the author"
                layout="fill"
                quality={80}
                priority
                loading="eager"
                draggable={false}
                objectFit="contain"
              ></Image>
              <div css={styles.informationContainer}>
                <ul>
                  <li>
                    <span>rover</span>
                    {data[requestedFullscreenIndex].rover}
                  </li>
                  <li>
                    <span>camera</span>
                    {data[requestedFullscreenIndex].camera}
                  </li>
                  <li>
                    <span>sol</span>
                    {data[requestedFullscreenIndex].sol}
                  </li>
                  <li>
                    <span>earth date</span>
                    {dayjs(data[requestedFullscreenIndex].earth_date).format(
                      "DD MMMM YYYY"
                    )}
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
          {data && (
            <motion.div
              id="gallery"
              style={{ translateZ: cameraPosition }}
              css={styles.cameraPlane}
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
                        src={img.img_src}
                        index={globalIndex}
                        elementLength={elementLength}
                        handleMouseDown={createMouseDownHandler(globalIndex)}
                        handleMouseUp={handleMouseUp}
                      ></ImageCard>
                    );
                  })}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
