import React, { useEffect, useState } from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";
import sliderData from "../../data/sliderData";
import "./slider.css";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(1);

  const toggleImage = (indexPayload) => {
    setSliderIndex((state) => {
      if (indexPayload + state > sliderData.length) {
        return 1;
      } else if (indexPayload + state < 1) {
        return sliderData.length;
      } else return state + indexPayload;
    });
  };

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 2000);

    return () => clearInterval(intervalID);
  }, [sliderIndex]);

  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={`./images/img-${sliderIndex}.jpg`}
          alt=""
          className="slider-img"
        />

        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="" />
        </button>
      </div>
    </>
  );
};

export default Slider;
