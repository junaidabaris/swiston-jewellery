import "./Card.css";
import { CiDiscount1 } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Card_profile from "./Card_profile";
import img from "../../../../../assets/img/sort.jpg";
const Card = () => {
  return (
    <div className="card_section">
      <div className="left_section">
        <div className="advertisment">
          <div>
            <p>
              {" "}
              <strong>Order online & pick</strong>? Now Choose your preferences
              at checkout
            </p>
          </div>
          <div>
            <img src={img} className="img_card_profile" />
          </div>
        </div>
        <div className="inner_card_section">
          <Card_profile />
        </div>
      </div>
      
      <div className="right_section">
        <div className="extraDis shadow-sm">
          <div className="d-flex justify-content-between align-items-center">
            <div className="container d-flex align-items-center  ">
              <span>
                <CiDiscount1 fontSize={"40px"} color="#DE57E5" />
              </span>
              <div className="ml-12">
                <p className="mb-0 extra">
                  <strong>EXTRA 5</strong>
                </p>
                <p className="mb-0">Save another ₹6,176 on this order</p>
              </div>
            </div>
            <button className="btn btn-tranparent btn-color p-0">Apply</button>
          </div>
        </div>
        <div className=" toapply shadow-sm">
          <strong>Apply More Coupouns</strong>
        </div>
        <div className="location_profile shadow-sm">
          <div className="d-flex justify-content-between align-items-center gap-4">
            <div>
              <span className="">
                <FaLocationCrosshairs fontSize={"20px"} />{" "}
              </span>{" "}
              <span>Check Delivery & Store Details </span>
            </div>
            <span className="pincode">Enter Pincode</span>
          </div>
        </div>
        <div className="allDetails">
          <ul>
            <li className=" d-flex justify-content-between align-items-center my-2">
              <div>Subtotal</div> <div>₹1,39,928</div>
            </li>
            <li className="d-flex justify-content-between align-items-center  my-2">
              <div>You Saved</div> <div className="text-success">-₹16,405</div>
            </li>
            <li className="d-flex justify-content-between align-items-center  my-2">
              <div>Coupon Discount</div> <div className="apply-cpn">Apply Coupon</div>
            </li>
            <li className="d-flex justify-content-between align-items-center  my-2">
              <div>Shipping (Standard)</div> <div>Free</div>
            </li>
            <hr className="" />
            <li className="d-flex justify-content-between align-items-center my-2">
              <div><strong>Total Cost</strong></div> <div>₹1,23,523</div>
            </li>
          </ul>
        </div>
        <button className="btn2"><strong>PLACE OREDER</strong></button>
      </div>
    </div>
  );
};
export default Card;
