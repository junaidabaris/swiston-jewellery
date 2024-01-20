import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../home/home.css";
import "swiper/css";
import Slider from "react-slick";
import "swiper/css/navigation";
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

function SimilarProduct() {
  const settings1 = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="recently_viewed">
      <div className="auto_container">
        <h3>Similar Design</h3>

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
  );
}

export default SimilarProduct;
