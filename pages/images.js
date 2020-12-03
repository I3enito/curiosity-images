import { css } from "@emotion/react";
import { motion, useElementScroll, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import useSWR from "swr";
import { ImageCard } from "../components/ImageCard/ImageCard";
import { fetcher } from "../utils/requests/fetcher";

function ImagesPage() {
  const scrollElement = useRef(null);
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/images`,
    fetcher
  );

  const isLoading = !data && !error;
  

  const imagesToShow = data && data.slice(0, 100);

  const { scrollY } = useViewportScroll(scrollElement);
  useEffect(() => {
    return scrollY.onChange((v) => console.log(v));
  }, [scrollY]);

  return (
    <div>
      <h1>Images Page</h1>
      <div
        ref={scrollElement}
        css={css`
          height: calc(${imagesToShow ? imagesToShow.length : 0} * 100vh);
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
