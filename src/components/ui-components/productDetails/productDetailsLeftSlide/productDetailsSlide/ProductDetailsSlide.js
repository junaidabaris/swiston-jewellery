import React from "react";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const slideImage = [
  {
    id: 1,
    imgSlideUrl:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_1_lar.jpg",
  },
  {
    id: 2,
    imgSlideUrl:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_3_lar.jpg",
  },
  {
    id: 3,
    imgSlideUrl:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_5_lar.jpg",
  },
  {
    id: 4,
    imgSlideUrl:
      "https://cdn.caratlane.com/media/static/images/Placeholder/Placeholder.png",
  },
  {
    id: 5,
    imgSlideUrl:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_9_lar.jpg",
  },
  {
    id: 1,
    imgSlideUrl:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_4_lar.jpg",
  },
];

function ProductDetailsSlide() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <>
      <div>
        <Slider asNavFor={nav2} ref={slider1}>
          {slideImage.map((slideImage, index) => (
            <div className="slick1_image" key={index}>
              <img src={slideImage.imgSlideUrl} alt="" />
            </div>
          ))}
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={6}
          swipeToSlide={true}
          focusOnSelect={true}>
          {slideImage.map((slideImage, index) => (
            <div className="slick2_image" key={index}>
              <img src={slideImage.imgSlideUrl} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ProductDetailsSlide;
