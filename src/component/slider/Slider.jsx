import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function Slider() {
    const images = [
        { url: "img/slider-1.jpg" },
        { url: "img/slider-2.jpg" },
        { url: "img/slider-3.jpg" },
      ];
  return (
    <>
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={"100vh"}
        images={images}
        loop={true}
        showBullets={true}
        showNavs={true}
      />
    </div>
    </>
  )
}

export default Slider