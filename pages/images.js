import React from "react";
import useSWR from "swr";
import { ImageCard } from "../components/ImageCard/ImageCard";
import { fetcher } from "../utils/requests/fetcher";

function ImagesPage() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/images`,
    fetcher
  );

  const isLoading = !data && !error;

  const imagesToShow = data && data.slice(0, 100);

  return (
    <div>
      <h1>Images Page</h1>
      {imagesToShow &&
        imagesToShow.map((img, index) => (
          <ImageCard key={index} src={img.img_src}></ImageCard>
        ))}
    </div>
  );
}

export default ImagesPage;
