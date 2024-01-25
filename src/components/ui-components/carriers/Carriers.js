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
        {/* <section className="carriers_background ">
          <div className="container">
            <div className="carrier_content1">
              <h1>Hear From Us</h1>
              <p>
                Driven by a passion to revolutionise the omnichannel experience
                and with a customer-first mentality at the core of our mission,
                our leaders drive the creation of new and innovative solutions
                to enhance the customer journey.
              </p>
<<<<<<< HEAD
              <div className="carrier_slide">
                <Slider {...settings}>
                  <div className="sweaper_slide">
                    <div className="slide_video">
                      <iframe
                        width="560"
                        height="300"
                        className="banner_slide_video"
                        src="https://www.youtube.com/embed/PpklFQm5ZF0?si=erPZs0YAiQ7FdhZy"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="slide_content">
                      <p>Mohit</p>
                      <span>Associate Product Manager</span>
                    </div>
                  </div>
                  <div className="sweaper_slide">
                    <div className="slide_video">
                      <iframe
                        width="560"
                        height="300"
                        className="banner_slide_video"
                        src="https://www.youtube.com/embed/PpklFQm5ZF0?si=erPZs0YAiQ7FdhZy"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="slide_content">
                      <p>Mohit</p>
                      <span>Associate Product Manager</span>
                    </div>
                  </div>
                  <div className="sweaper_slide">
                    <div className="slide_video">
                      <iframe
                        width="560"
                        height="300"
                        className="banner_slide_video"
                        src="https://www.youtube.com/embed/PpklFQm5ZF0?si=erPZs0YAiQ7FdhZy"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="slide_content">
                      <p>Zulfiquar</p>
                      <span>Machine Learning Engineer</span>
                    </div>
                  </div>
                  <div className="sweaper_slide">
                    <div className="slide_video">
                      <iframe
                        width="560"
                        height="300"
                        className="banner_slide_video"
                        src="https://www.youtube.com/embed/PpklFQm5ZF0?si=erPZs0YAiQ7FdhZy"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="slide_content">
                      <p>Mohan</p>
                      <span>Team Lead</span>
                    </div>
                  </div>
                  <div className="sweaper_slide">
                    <div className="slide_video">
                      <iframe
                        width="560"
                        height="300"
                        className="banner_slide_video"
                        src="https://www.youtube.com/embed/PpklFQm5ZF0?si=erPZs0YAiQ7FdhZy"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="slide_content">
                      <p>Mohit</p>
                      <span>Associate Product Manager</span>
                    </div>
                  </div>
                  <div className="sweaper_slide">
                    <div className="slide_video">
                      <iframe
                        width="560"
                        height="300"
                        className="banner_slide_video"
                        src="https://www.youtube.com/embed/PpklFQm5ZF0?si=erPZs0YAiQ7FdhZy"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="slide_content">
                      <p>Mohit</p>
                      <span>Associate Product Manager</span>
                    </div>
                  </div>
                </Slider>
              </div>
=======
            </div>
            <div className="careers_slide_video">
              <Slider {...settings} className="careers_slide">
                <div className="careers_slide_video_content">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=oldUvA3yBNE"
                    width="400px"
                    height="300px"
                    style={{ borderRadius: "10px" }}
                    muted
                  />
                </div>
                <div>
                 
                </div>
                <div>
                 
                </div>
                <div>
                <ReactPlayer
                   
                  />
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
                <div>
                  <h3>7</h3>
                </div>
                <div>
                  <h3>8</h3>
                </div>
              </Slider>
>>>>>>> 88151a31aaf34a0edf5b8cce254b59673c460d19
            </div>
          </div>
        </section> */}
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
                }}
              >
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
