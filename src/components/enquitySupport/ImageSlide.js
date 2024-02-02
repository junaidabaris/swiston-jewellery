import React from "react";
import Slider from "react-slick";
import banner1 from "./image/banner-1.jpg"
import banner2 from "./image/banner-2.jpg"
import banner3 from "./image/banner-3.jpg"

export default function Imageslide(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    };
    return(
        <div>
        <Slider {...settings}>
          <div>
            <img src={banner1}/>
          </div>
          <div>
          <img src={banner2}/>
          </div>
          <div>
          <img src={banner3}/>
          </div>
        </Slider>
      </div>
    )
}