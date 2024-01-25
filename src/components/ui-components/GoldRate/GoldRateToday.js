import React from "react";
import "./GoldRateToday.css";
import digitalimg from "../../../images/GoldRateImages/digital-gold-img.jpeg";
import bestgold from "../../../images/GoldRateImages/bestgold.jpeg";

const GoldRateToday = () => {
  let slectState = [
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Chattisgarh",
    "Gujarat",
    "Haryna",
    "Himachal Pradesh",
  ];
  let selectCity = ["Delhi", "Mumbai", "Dehradun", "Saharanpur", "Kolkata"];
  let curentRate = "65650";
  let curentCaret = "22K Rate / Gram";
  return (
    <>
      <section>
        <div className="container m-auto my-5">
          <h4 className="curentraet-heading">Gold Rate Today!</h4>
          <div className="row curent-rate-row">
            <div className="col-lg-6 justify-content-center d-flex  ">
              <div className="select-container">
             
                <select
                  className="form-select"
                  aria-label=".form-select-lg example"
                >
                  {slectState.map((item1) => (
                    <option key={item1}> {item1}</option>
                  ))}
                </select>
                <select
                  className="form-select"
                  aria-label=".form-select-lg example"
                >
                  <span>Select city</span>
                  {selectCity.map((item2) => (
                    <option key={item2}> {item2}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="select-container">
                <p>
                  <h4 className="curentraet-heading">
                    {`₹ ${curentRate}`}{" "}
                    <span style={{ color: "white", paddingLeft: "20px" }}>
                      {curentCaret}
                    </span>
                  </h4>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    *Price may vary by city
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6">
              <div class="card bg-dark">
                <img src={digitalimg} class="card-img" alt="digitalgold" />
                <div class="card-img-overlay">
                  <h5 class="card-title">Invest in Digital Gold</h5>
                  <p class="card-text">
                    Buy 24KT Caratlane DigiGld online to save money, grow your
                    wealth, and convert your gold into beautiful
                    jewellery—whenever you want it. Guaranteed, no-hassles
                    buyback
                  </p>
                  <a href="#" className="btn text-white">
                    Buy DigiGld Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card bg-dark">
                <img src={bestgold} className="card-img " alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title ">
                    BEST OF THE
                    <br /> BEST THE <br /> MUST-HAVES LIST
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GoldRateToday;
