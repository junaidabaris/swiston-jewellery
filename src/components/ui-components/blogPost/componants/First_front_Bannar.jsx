import React from "react";
import "./First_front_Bannar.css";
import baracelelate from "../blog_assets/baracelate.webp";
import thrown from "../blog_assets/thrown.webp";
import { Link } from "react-router-dom";

const First_front_Bannar = () => {
  return (
    <div className="_bannar_c d-flex justify-content-between ">
      <div className="_heading_baraclate">
        <div className="_heading_position">
          <h1 data-aos="fade-left">6 Pongal Jewellery Inspirations for This Festive Season </h1>
        </div>
        <div className="_latest"><Link className="_latest_link"><span>L</span><span>A</span><span>T</span><span>E</span><span>S</span><span>T</span></Link></div>
      </div>
      <div className="flex-1  _baracelate_image">
        <div className="_thrown_pic" data-aos="fade-right"></div>
        <span className="_caratlane">
          <Link className="_link">#CARATLANE</Link>
        </span>
        <div className="mobile_headline">
        <h1>6 Pongal <br/> Jewellery  <br/>  Inspirations for   <br/> This Festive  <br/>  Season</h1>
      </div>
      </div>
    </div>
  );
};

export default First_front_Bannar;
