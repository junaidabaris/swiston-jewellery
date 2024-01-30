import React from "react";
import "./careerFeature.css";
import { MdArrowOutward } from "react-icons/md";
import Slider from "react-slick";
const featureItem = [
  {
    id: 1,
    imgUrl:
      "https://cdn-images-1.medium.com/v2/resize:fit:800/0*KiDKui6WcMU2jdg0.gif",
    featureHeading: "Sharing Data Between Controllers: B...",
    featureAbout:
      "This is article will help you to understand the different ways...",
  },
  {
    id: 2,
    imgUrl: "https://cdn-images-1.medium.com/max/800/0*qwLUgnm3Jq1atOu5.png",
    featureHeading: "Understanding Auto Layout And Const...",
    featureAbout:
      "This article gives you an easy way of understanding Constrai...",
  },
  {
    id: 1,
    imgUrl: "https://cdn-images-1.medium.com/max/800/0*LqGOhU2ZYgIZn0kb.jpg",
    featureHeading: "Exploring Layout Managers in Androi...",
    featureAbout:
      "This article will give you a fair understanding of Constrain...",
  },
];

function CareerFeature() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="feat_container">
        <div className="container">
          <h2>Featured Reads</h2>
          <p>
            Ready to broaden your knowledge and stay ahead of the curve? Check
            out our thought-leadership articles now!
          </p>
          <div className="featureSwiper">
            <div className="feature_sweaper_wraper">
              {featureItem.map((featureItem, index) => {
                return (
                  <div className="feature_sweaper_slide " key={index}>
                    <div className="img_overflow">
                      <img src={featureItem.imgUrl} alt="" />
                    </div>
                    <h3 style={{ fontWeight: 600 }}>
                      {featureItem.featureHeading}
                    </h3>
                    <p>{featureItem.featureAbout}</p>
                    <div className="circle">
                      <span>
                        <MdArrowOutward />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="featureSwiperSlideBtn">
            <button className="">visit our blog</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerFeature;
