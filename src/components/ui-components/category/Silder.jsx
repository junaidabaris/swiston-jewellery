import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import Slider from "react-slick";

export default function Silder({item}){
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="next"
            onClick={onClick}>
            <MdOutlineNavigateNext />
          </div>
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="prev"
            onClick={onClick}>
                <GrFormPrevious /></div>
    
        );
      }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return(
        <>
         <div className="silder">
         <Slider {...settings} className="slider_box">
            {item?.img1 && item?.img1?.map((item) => {
  return <div className="card_img" key={item?.id}>
  <img src={item.img} alt="ring"/>
  </div>
            })}
                
                
                {/* <div>
                    <img src={item.img2} alt="ring" />
                </div>
                <div>
                     <img src={item.img3} alt="ring" />
                </div>
                <div>
                    <img src={item.img4} alt="ring" />
                </div>
                <div>
                    <img src={item.img5} alt="ring" />
                </div> */}
            </Slider>
         </div>
        </>
    )
}