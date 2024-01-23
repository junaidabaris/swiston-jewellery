import React from "react";
import "../referAndEarn/referAndEarn.css";
import banner1 from "../../../assets/img/banner_web_earn.png";
import Reward from "./reward/Reward";
import InspirePeople from "./inspirePeople/InspirePeople";
import SomeQuestions from "./someQuestions/SomeQuestions";
// import banner2 from "../../../assets/img/bann"
function ReferAndEarn() {
  return (
    <>
      <div className="refer_and_earn">
        <div className="banner_image_earn_background">
          <img className="hide-md" src={banner1} alt="" />
          <img
            className="hide-lg"
            src="https://cdn.caratlane.com/media/static/images/referral/26thsep/header-image.png"
            alt=""
          />
        </div>
        <div className="refer_earn_card">
          <h2>
            <span className="intro">Introducing,</span>{" "}
            <span className="refer_heading"> Refer and Earn </span>
          </h2>
          <p className="refer_about">
            You're a true style inspiration! Share your great taste in diamonds
            with friends & family and earn their compliments!
          </p>
          <button type="button" className="refer_btn">
            Get Started
          </button>
        </div>
        <Reward />
        <InspirePeople />
        <SomeQuestions />
      </div>
    </>
  );
}

export default ReferAndEarn;
