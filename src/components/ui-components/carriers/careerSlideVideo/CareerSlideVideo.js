import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const slidevideUrl = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=oldUvA3yBNE",
    name: "Mohit",
    profession: "Associate Product Manager",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=jC82pO92Cws",
    name: "Zulfiquar",
    profession: "Machine Learning Engineer",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=ayEbZDTPzgM",
    name: "Siddesh",
    profession: "Associate Product Manager",
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=oldUvA3yBNE",
    name: "Junaid",
    profession: "Team Leader",
  },
  {
    id: 5,
    url: "https://www.youtube.com/watch?v=oldUvA3yBNE",
    name: "Mohit",
    profession: "Associate Product Manager",
  },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <>
      <div
        className="careers_custom_next_arrow career_btn_slide"
        onClick={onClick}>
        <span>
          <IoIosArrowBack />
        </span>
      </div>
    </>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <>
      <div
        className="careers_custom_pre_arrow career_btn_slide"
        onClick={onClick}>
        <span>
          <IoIosArrowForward />
        </span>
      </div>
      ;
    </>
  );
}
function CareerSlideVideo() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="careers_slide_video">
        <Slider {...settings} className="careers_slide">
          {slidevideUrl.map((slidevideUrl, index) => {
            return (
              <>
                <div className="careers_slide_video_content" key={index}>
                  <ReactPlayer
                    url={slidevideUrl.url}
                    width="350px"
                    height="280px"
                    style={{
                      borderRadius: "10px",
                      // margin: "20px",
                      padding: 10,
                    }}
                    muted
                  />
                  <div className="slide_content1">
                    <h3>{slidevideUrl.name}</h3>
                    <p>{slidevideUrl.profession}</p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default CareerSlideVideo;
