import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css"

import { AddBillingadd } from "./AddBillingadd";
import { RigthSide } from "./RigthSide";

function Checkout() {
  return (
    <>
      <Helmet>
        <title>Checkout | Swiston Jewellary</title>
        <meta
          name="keyword"
          content="Swiston Jewellary"
        />
        <meta
          name="description"
          content="Buy Swiston Jewellary Products and Machinery Online at Swiston Jewellary. We Offering broad range of Swiston Jewellary."
        />
      </Helmet>
      <section className="checkoutSec mt-4 mb-4">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="loginInfo">

                <div className="coupon">
                  <p>
                    Already Have Account <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <AddBillingadd />
            </div>
            <div className="col-lg-5">

              <RigthSide />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Checkout