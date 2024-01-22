import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import "../home/home.css";
// import "../category/category.css";
import { MdLocationSearching } from "react-icons/md";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
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

function Home() {
  const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div style={{ zIndex: -1 }} className="home1_overflow">
        <section className="home_slide_background">
          <div className="">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper">
              <SwiperSlide>
                <div className="home_image">
                  <h3>1</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home_image1">
                  <h3>2</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home_image2">
                  <h3>3</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="div"></section>
        <section className="design_container">
          <div className="auto_container">
            <div className="home1_image_background">
              <div className="design_content">
                <h1>
                  EVERYDAY <br /> VOWS
                </h1>
                <div
                  className="many_design_flex"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}>
                  <div className="many_design">
                    <h1>450+</h1>
                    <h2>DESIGNS</h2>
                  </div>
                  <div className="arrow_design">
                    <span>
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-3 mb-3">
          <div className="auto_container">
            <div className="row visual_tab_container">
              <div className="col-lg-4 col-md-6 ">
                <img
                  src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/6tile_2/For-The-New-Age-Bride_Desktop.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 ">
                <img
                  src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/6tile_2/Ace-Your-Workwear-Game_Desktop.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 ">
                <img
                  src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/6tile_2/Mark-Your-Success-with-a-Diamond_Desktop.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <img
                  src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/6tile_2/Seal-It-With-Wedding-Bands_Desktop.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <img
                  src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/6tile_2/Sway-In-Style-At-Every-Party_Desktop.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <img
                  src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/11_NOV/HPBanner/6tile_2/Anniversary-Gifts-for-Her_Desktop.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="view_all_collection">
          <div className="auto_container">
            <div className="row m-0 p-0 ">
              <div className="col-xl-4 col-md-6 p-0 image_content">
                <img
                  src="https://img.freepik.com/free-photo/still-life-aesthetic-earrings_23-2149649160.jpg?size=626&ext=jpg&ga=GA1.1.608086010.1693898209&semt=ais"
                  alt=""
                />
                <div className="name">
                  <h4>ADAA</h4>
                  <p>by Swiston Jewellary</p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 p-0 image_content">
                <img
                  src="https://img.freepik.com/premium-photo/small-pirate-treasure-chest_752237-8681.jpg?size=626&ext=jpg&ga=GA1.1.608086010.1693898209&semt=ais"
                  alt=""
                />
                <div className="name">
                  <h4>ALPHONA</h4>
                  <p>by Swiston Jewellary</p>
                </div>
              </div>
              <div className="col-xl-4  col-md-6 p-0 image_content">
                <img
                  src="https://img.freepik.com/free-photo/top-view-essentials-bead-working-with-magnifying-glass_23-2148815801.jpg?size=626&ext=jpg&ga=GA1.1.608086010.1693898209&semt=ais"
                  alt=""
                />
                <div className="name">
                  <h4>SWITCH</h4>
                  <p>Convertible Jewellery by </p>
                  <p> Swiston Jewellary</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="design_container">
          <div className="auto_container">
            <div className="exchange_image_background">
              <div className="design_content">
                <h1 className="style_upgrade">A STYLISH</h1>
                <h1 className="style_upgrade">UPGRADE</h1>
                <div className="upgrade_deduction_flex">
                  <div className="many_design">
                    <h1>
                      {" "}
                      <span>Get</span>0% DEDUCTION
                    </h1>
                    <p>On your Gold Exchanged</p>
                  </div>
                  <div className="arrow_design">
                    <span>
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="schedule_appointment">
          <div className="row">
            <div className="col-lg-6 schedule_appointment_content">
              <img
                src="https://img.freepik.com/free-photo/man-using-external-storage-used_23-2149388511.jpg?size=626&ext=jpg&ga=GA1.2.608086010.1693898209&semt=ais"
                alt=""
              />
              <div className="schedule_content">
                <h3>Unsure Which Design To Pick?</h3>
                <p>Book a Free Home Trail!</p>
                <button className="Schedule_btn btn-1">
                  Schedule Appointment
                </button>
              </div>
            </div>
            <div className="col-lg-6 schedule_visit_content">
              <img
                src="https://img.freepik.com/free-photo/best-friends-hanging-out-outdoors_23-2149244667.jpg?size=626&ext=jpg&ga=GA1.1.608086010.1693898209&semt=ais"
                alt=""
              />
              <div className="visit_content">
                <h3 cl>Come visit us at any of our stores!</h3>

                <div className="search_visit_office">
                  <span className="loacate_icon">
                    {" "}
                    <MdLocationSearching />
                  </span>
                  <input type="text" placeholder="Enter Pincode or City" />
                  <span className="locate_me">Locate Me</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="recently_viewed">
          <div className="auto_container">
            <h2 className="text-center mb-4 ">Recently Viewed</h2>

            <div>
              <Slider {...settings1}>
                <div className="view_product">
                  <img
                    src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08153-1YP9RS_12_listhover.jpg"
                    alt=""
                  />
                  <div className="rate_flex">
                    <p>₹14,256 </p>
                    <span>₹15,840</span>
                  </div>
                  <div className="item_name">
                    <span>Glinty Pair Gemstone Ring</span>
                  </div>
                </div>
                <div className="view_product">
                  <img
                    src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                    alt=""
                  />
                  <div className="rate_flex">
                    <p>₹14,256 </p>
                    <span>₹15,840</span>
                  </div>
                  <div className="item_name">
                    <span>Glinty Pair Gemstone Ring</span>
                  </div>
                </div>
                <div className="view_product">
                  <img
                    src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                    alt=""
                  />
                  <div className="rate_flex">
                    <p>₹14,256 </p>
                    <span>₹15,840</span>
                  </div>
                  <div className="item_name">
                    <span>Glinty Pair Gemstone Ring</span>
                  </div>
                </div>
                <div className="view_product">
                  <img
                    src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                    alt=""
                  />
                  <div className="rate_flex">
                    <p>₹14,256 </p>
                    <span>₹15,840</span>
                  </div>
                  <div className="item_name">
                    <span>Glinty Pair Gemstone Ring</span>
                  </div>
                </div>
                <div className="view_product">
                  <img
                    src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                    alt=""
                  />
                  <div className="rate_flex">
                    <p>₹14,256 </p>
                    <span>₹15,840</span>
                  </div>
                  <div className="item_name">
                    <span>Glinty Pair Gemstone Ring</span>
                  </div>
                </div>
                <div className="view_product">
                  <img
                    src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                    alt=""
                  />
                  <div className="rate_flex">
                    <p>₹14,256 </p>
                    <span>₹15,840</span>
                  </div>
                  <div className="item_name">
                    <span>Glinty Pair Gemstone Ring</span>
                  </div>
                </div>
              </Slider>
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

              <div className="input-group mt-4 signInNewsletter">
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

export default Home;
