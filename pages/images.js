import React from "react";
import { ImmersiveGallery } from "../components/ImmersiveGallery/ImmersiveGallery";

function ImagesPage() {
  return (
    <div>
      <ImmersiveGallery
        cameraName="NAVCAM"
        roverName="Curiosity"
      ></ImmersiveGallery>
    </div>
  );
}

export default ImagesPage;
