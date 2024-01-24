import React from "react";
import "./ShippingPolicy.css";
import policyimg1 from "../../../images/shippingPolicyimg/shipimg1.png"

import policyimg2 from "../../../images/shippingPolicyimg/shipimg2.png"
import policyimg3 from "../../../images/shippingPolicyimg/shipimg3.png"
import policyimg4 from "../../../images/shippingPolicyimg/shipimg4.png"

export default function ShippingPolicy() {
  return (
    <>
      <div className="container">
        <div className="row shipping-contant">
          <div className="col-lg-12 shipping-top">
            <h2>Shipping Policy</h2>
            <p>
              We offer FREE shipping on every order only within India. Your
              order will be shipped to you fully insured. We urge all customers
              to inspect the package for any damage or tamper before receiving
              or signing for receipt.
            </p>
          </div>
          <div className="col-lg-6 py-3">
            <p>
              For our Indian customers, after your item has been packaged, it
              will be shipped and delivered free via one of the following
              carriers.
            </p>
          </div>
          <div className="col-lg-6 shipping-container py-3">
            <div className="shipping-img">
            <img src={policyimg1} />
              <small>Sequel</small>
            </div>
            <div className="shipping-img">
            <img src={policyimg2} />
              <small>Speed Post</small>
            </div>
            <div className="shipping-img">
            <img src={policyimg3} />

              <small>Blue Dart</small>
            </div>
          </div>
          <div className="col-lg-6 py-3">
            <p>
              For our International customers, after your item has been
              packaged, it will be shipped and delivered via the following
              carrier.
            </p>
            <p>
              The shipping charges for our international customers are charged
              at the time of order booking.
            </p>
          </div>
          <div className="col-lg-6 py-5">
            <div className="shipping-img">
            <img src={policyimg4} />
              <small>UPS</small>
              
            </div>
          </div>
          <div className="col-lg-12 py-5">
            <h2>Free Gift Packaging</h2>
            <p>
              In case your purchase is intended as a gift, we offer free gift
              packing, along with a gift message of your choice. Your gift will
              be delivered in distinctive CaratLane gift packing. So whether you
              order a gift to give to your loved ones personally, or want us to
              deliver it, the recipient is sure to be impressed.
            </p>
            <p>
              To send a free gift message with your gift, look for the Gift
              message text box in the shopping bag/cart page. Your personal
              message will be printed on a distinctive card and delivered along
              with the gift.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
