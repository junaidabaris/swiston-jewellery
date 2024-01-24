import React, { useState, useEffect } from "react";
import "./Second_hero.css";
import girlImage from "../blog_assets/face_girl_img.webp";
import { TbArrowCurveLeft } from "react-icons/tb";
import gifimage from '../blog_assets/twist_girl_gif.gif';
import clebs from '../blog_assets/celebs_pics.webp'

const Second_hero = () => {
  const [backgroundScale, setBackgroundScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scale based on the sine of the scroll position
      const scale = 0.95 + 0.05 * Math.sin(window.scrollY * 0.005); // Adjust the multiplier for frequency
      setBackgroundScale(scale);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid main_container">
      <div className="row _section_profile">
        <div className="col-lg-6 box_1 box_1h  col-sm-12"></div>
        <div
          className="col-lg-6 box_1 box_2h col-sm-12 "
          style={{ transform: `scale(${backgroundScale})` }}
        ></div>
        <div className="_middleImage">
          <div>
            <h3>How to Choose the Best Jewellery For Your Lehenga </h3>
            
              <div  style={{width:'70px'}} className="view_more">
                Read More{" "}
                <span>
                  <TbArrowCurveLeft fontSize={"40px"} />{" "}
                </span>
              </div>
          
          </div>

          <img src={girlImage} alt="immage " />
        </div>
      </div>
      <div className="row _second_section">
        <div className=" col-sm-12  col-lg-6 d-flex justify-content-between gap-4 flex-sm-wrap flex-lg-nowrap  ">
         <div className="blogpost_image">
          <img src={gifimage} alt="gif image " />
         </div>
         <div>
          <h2>How to choose the best jewellery for your gown</h2>
          <p>Do you choose the gown first or the jewellery? That is a question that does crop up from time to</p>
         </div>
        </div>
        <div className=" col-sm-12  col-lg-6 d-flex justify-content-between gap-4 flex-sm-wrap flex-lg-nowrap ">
         <div className="blogpost_image">
          <img src={clebs} alt=" celbs image" />
         </div>
         <div>
          <h2>8 Celebrities Who Have Rocked Jewellery Sets Like a Total Diva</h2>
          <p>Pairing earrings with a matching neckpiece has been a popular trend since the yesteryears, and doesn’t seem to fade anytime</p>
         </div>
        </div>
       
      </div>
      <div  className="view_more">
                View all{" "}
                <span>
                  <TbArrowCurveLeft fontSize={"40px"} />{" "}
                </span>
              </div>
    </div>
  );
};

export default Second_hero;
