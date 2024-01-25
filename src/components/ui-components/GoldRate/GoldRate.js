import React from "react";
// import "../../Components/GoldRate/GoldRate.css";
import "./GoldRate.css";
import { GoArrowRight } from "react-icons/go";
import engmentring from "../../../images/HomeMainimages/homemain3.gif";
import GoldRateSlide from "./GoldRateSlide";
import GoldRateCard from "./GoldRateCard";
import GoldRateToday from "./GoldRateToday";
export default function GoldRate() {
  return (
    <>
      <GoldRateToday />

      {/* dettermine gold rate  */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-7 determin-contant">
              <h4>Determining Gold Rate</h4>
              <p className="py-3">
                Determining Gold Rate Gold has remained one of the most valued
                metals in India for centuries and since years is considered to
                be one out of the few prime investment options. India, being the
                largest consumer of gold in the world (almost 20-25% of the
                world’s total consumption), also has a huge market for gold and
                gold jewellery. People buy gold in the form of trendy jewellery,
                gold coins or gold bars. It is also consumed in the form of
                investments and traders interested in commodities trading, often
                invest in gold bullion.
              </p>
              <p>
                Gold rate in India changes daily, with several factors impacting
                it in a particular place on a given day. This change in gold
                rates that varies from city to city depends on demand, supply,
                and local market conditions. Some of the most critical aspects
                that determine the price of gold in a country are demand &
                supply, global market conditions and currency fluctuations, with
                the rates changing every day. All the factors that affect gold
                rates in India are briefly explained below.
              </p>
              <p>
                However, before learning about gold rates in India, one should
                be aware of the fact that the regular gold price is not
                different than the hallmarked gold price. You will not be
                charged extra for buying hallmarked gold. The only and most
                important difference is that you are ensured of purity when you
                buy gold which is hallmarked by BIS. Hallmarked gold rates in
                India do not differ in their pricing. The difference lies in the
                quality of the precious metal. So one should always buy
                high-quality gold. And to make sure of its quality, it is better
                to stick to the BIS hallmarked gold products.
              </p>
              {/* <div className="d-flex explore-button-contant py-4">
                <h4>Invest in Gold Jewellery</h4>
                <button className="explore-button">
                  <a href="#"> Explore Gold Jewellery</a>
                </button>
              </div> */}
              {/* start gold slider */}
              <GoldRateSlide /> 
              {/* <GoldRateSlide /> */}
              {/* end gold slider  */}
            </div>
            <div className="col-5">
              <h4>Gold Rate in Major Cities</h4>
              <ul className="menu py-3">
                <li className="menu-item2 d-flex">
                  <h5 className="m-0 city-heading">
                    Gold Rate Today in Bangalore
                  </h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item1 d-flex">
                  <h5 className="m-0 city-heading">Gold Rate Today in Agra</h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item2 d-flex">
                  <h5 className="m-0 city-heading">
                    Gold Rate Today in Bangalore
                  </h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item1 d-flex">
                  <h5 className="m-0 city-heading">Gold Rate Today in Agra</h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item2 d-flex">
                  <h5 className="m-0 city-heading">
                    Gold Rate Today in Bangalore
                  </h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item1 d-flex">
                  <h5 className="m-0 city-heading">Gold Rate Today in Agra</h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item2 d-flex">
                  <h5 className="m-0 city-heading">
                    Gold Rate Today in Bangalore
                  </h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item1 d-flex">
                  <h5 className="m-0 city-heading">Gold Rate Today in Agra</h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item2 d-flex">
                  <h5 className="m-0 city-heading">
                    Gold Rate Today in Bangalore
                  </h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item1 d-flex">
                  <h5 className="m-0 city-heading">Gold Rate Today in Agra</h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item2 d-flex">
                  <h5 className="m-0 city-heading">
                    Gold Rate Today in Bangalore
                  </h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item1 d-flex">
                  <h5 className="m-0 city-heading">Gold Rate Today in Agra</h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item2 d-flex">
                  <h5 className="m-0 city-heading">
                    Gold Rate Today in Bangalore
                  </h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item1 d-flex">
                  <h5 className="m-0 city-heading">Gold Rate Today in Agra</h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item2 d-flex">
                  <h5 className="m-0 city-heading">
                    Gold Rate Today in Bangalore
                  </h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item1 d-flex">
                  <h5 className="m-0 city-heading">Gold Rate Today in Agra</h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
                <li className="menu-item2 d-flex">
                  <h5 className="m-0 city-heading">
                    Gold Rate Today in Bangalore
                  </h5>
                  <i className="right-arrow">
                    <GoArrowRight />
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Explore our Stores */}
      <section className="pincod-explore ">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-5 pt-5">
              <h4>Explore our Stores</h4>
              <p className="explore-prf">
                We have 123 retail stores across 40+ Indian cities.You can also
                buy online & pickup from the store anytime!
              </p>
              <div className="pincode-contant">
                <div className="d-flex pincode-text">
                  <span>Enter Pincode</span>
                  <span>Locate Me</span>
                </div>
                <input type="text" className="w-100" placeholder="Enter Pincode" />
              </div>
            </div>
            <div className="col-7">
              <img src={engmentring} className="explore-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
