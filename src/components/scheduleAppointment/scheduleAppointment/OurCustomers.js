import React from "react";
import "./OurCustomers.css";
import { FcCustomerSupport } from "react-icons/fc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Customers from "./Customers";
// import AfroStyles from "./afroStyles";
export default function OurCustomers() {
  const settings = {
    dots: false,
    speed: 100,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      {/* here start crousel */}

      <div className="content">
        <h3 className="ourcustomer-title">Hear it from Our Customers</h3>
        <span className="customer-icon">
          <FcCustomerSupport />
        </span>
        <div className="our-comentes">
          <Slider {...settings}>
            {/* <Customers/> */}

            <Customers
              data={{
                name: "Mohd Rihan",
                discription:
                  " It was great experience of try at home. It saves time. Products werealso good. Behaviour of person is professional.",
                starts: [1, 2, 3],
              }}
            />
            <Customers
              data={{
                name: "Mohd Nizam",
                discription:
                  " It was great experience of try at home. It saves time. Products were also good. Behaviour of person is professional.",
                starts: [1, 2],
              }}
            />
             <Customers
              data={{
                name: "Aatif",
                discription:
                  " It was great experience of try at home. It saves time. Products were also good. Behaviour of person is professional.",
                starts: [1, 2,3,4],
              }}
            />
             <Customers
              data={{
                name: "Md Sir",
                discription:
                  " It was great experience of try at home. It saves time. Products were also good. Behaviour of person is professional.",
                starts: [1],
              }}
            />
          </Slider>
        </div>
      </div>
    </>
  );
}
