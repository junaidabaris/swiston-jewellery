import React from "react";
import "../carriers/carriers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CareerHomeBanner from "./careerHomeBanner/CareerHomeBanner";
import CareerFeature from "./careerFeature/CareerFeature";
import CareerAnthem from "./careerAnthem/CareerAnthem";
import CareerAbout from "./careerAbout/CareerAbout";
import CareerReview from "./careerReview/CareerReview";
import LetsWorkTogether from "./letsWorkTogether/LetsWorkTogether";
import SignUpNewsLetter from "./signUpNewsletter/SignUpNewsLetter";

function Carriers() {
  return (
    <>
      <CareerHomeBanner />
      <CareerFeature />
      <CareerAnthem />
      <CareerAbout />
      <CareerReview />
      <LetsWorkTogether />
      <SignUpNewsLetter />
    </>
  );
}

export default Carriers;
