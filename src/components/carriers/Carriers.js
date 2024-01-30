import React from "react";
import "../carriers/carriers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsRocketTakeoffFill } from "react-icons/bs";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}
function Carriers() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div>
        <section className="carriers_background ">
          <div className="auto_container">
            <div className="carrier_content">
              <h1>Hear From Us</h1>
              <p>
                Driven by a passion to revolutionise the omnichannel experience
                and with a customer-first mentality at the core of our mission,
                our leaders drive the creation of new and innovative solutions
                to enhance the customer journey.
              </p>
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
                        allowfullscreen></iframe>
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
                        allowfullscreen></iframe>
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
                        allowfullscreen></iframe>
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
                        allowfullscreen></iframe>
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
                        allowfullscreen></iframe>
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
                        allowfullscreen></iframe>
                    </div>
                    <div className="slide_content">
                      <p>Mohit</p>
                      <span>Associate Product Manager</span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        <section className="Carrier_feature_reads">
          <div className="auto_container">
            <div>
              <div className="Carrier_feature_content">
                <h1>About Us</h1>
                <p>
                  Discover Swiston's mission to express emotions through
                  jewelry. Journey with us from our humble beginnings in 2008 to
                  a leading jewelry brand in 2023.
                </p>
                <button className="btn btn-outline-primary mt-3">
                  {" "}
                  Know More
                </button>
              </div>
              <div className="about_photo">
                <img
                  className="image1"
                  src="https://careers.caratlane.com/wp-content/uploads/2023/06/Aboutus-1.jpg"
                  alt=""
                />
                <img
                  className="image2"
                  src="https://careers.caratlane.com/wp-content/uploads/2023/06/Aboutus-2.jpg"
                  alt=""
                />
                <img
                  className="image3"
                  src="https://careers.caratlane.com/wp-content/uploads/2023/06/Aboutus-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div></div>
          </div>
        </section>
        <section className="carrier_review">
          <div className="auto_container">
            <div className="carrier_review_content">
              <h1>Reviews</h1>
              <p>
                Discover What People Say: Unveiling Insider Stories from
                AmbitionBox & Glassdoor
              </p>
              <div className="review_button">
                <button className="btn btn-outline-primary ">
                  View In Ambitionbox
                </button>
                <button className="btn btn-outline-primary ml-3">
                  View In Glassdoor
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="work_together">
          <div className="auto_container">
            <div className="work_content">
              <h1 className="">Let's Work Together</h1>
              <p>
                Check out the open roles we have available at Swiston along
                with a brief overview of our employer benefits and the expected
                process we would go through together.
              </p>
              <button className="btn btn-outline-primary mt-3">Join Us</button>
            </div>
          </div>
        </section>
        <section className="signUp_section">
          <div className="auto_container">
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
