import React from "react";
import "../carriers/carriers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsRocketTakeoffFill } from "react-icons/bs";

import CareerHomeBanner from "./careerHomeBanner/CareerHomeBanner";
import CareerFeature from "./careerFeature/CareerFeature";
import CareerAnthem from "./careerAnthem/CareerAnthem";
import CareerAbout from "./careerAbout/CareerAbout";
import CareerReview from "./careerReview/CareerReview";

function Carriers() {
  return (
    <>
      <div>
        <CareerHomeBanner />
        <CareerFeature />
        <CareerAnthem />
        <CareerAbout />
        <CareerReview />
        <section className="work_together">
          <div className="container">
            <div className="work_content">
              <h1 className="">Let's Work Together</h1>
              <p>
                Check out the open roles we have available at CaratLane along
                with a brief overview of our employer benefits and the expected
                process we would go through together.
              </p>
              <button className="btn btn-outline-primary mt-3">Join Us</button>
            </div>
          </div>
        </section>
        <section className="signUp_section">
          <div className="container">
            <div className="work_content">
              <span>
                <BsRocketTakeoffFill />
              </span>
              <h1 className=" mt-4">Sign Up For Our Newsletter</h1>

              <div
                className="input-group mt-4"
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Please Enter Your Email Id"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
                <button type="submit" class="btn btn-primary ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Carriers;
