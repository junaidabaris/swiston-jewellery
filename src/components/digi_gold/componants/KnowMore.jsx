import React from "react";
import "./KnowMore.css";
import ButtonAndKnow from "../sharedComponants/ButtonAndKnow";
import LeftBannarIconImage from "../sharedComponants/LeftBannarIconImage";
import IconCalender from "../digi_gold_assets/calender.png";
import Hand from "../digi_gold_assets/handsprize.png";
import Price from '../digi_gold_assets/giftIcon.png'

const KnowMore = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-sm-12" data-aos="fade-left">
            <p className="knowmoreP">Know More</p>
            <h2 className="knowmoreheading">
              Invest in a high-payoff digital gold. Buy, sell, or redeem your
               DigiGld in exchange for beautiful jewellery.
            </h2>
            <ButtonAndKnow />
          </div>
          <div className="col-lg-4 col-sm-12" data-aos="fade-right">
           <div  data-aos="fade-left">
           <LeftBannarIconImage
              image={IconCalender}
              description={
                "Buy in-store or online 24x7. Purchase gold online or offline through one of our partner jewellery stores."
              }
              heading={"Unparalleled convenience"}
            />
           </div>
          <div data-aos="fade-left">
          <LeftBannarIconImage image={Hand} description={'No carrying cost or hidden charges. Every gram of Swiston DigiGld you buy online is backed by real gold deposits worth the same.'} heading={'What you buy is what you get'} />
            <LeftBannarIconImage
              image={Price}
              description={
                "Redeem your Swiston DigiGld balance across our 150+ online stores and physical outlets."
              }
              heading={"100% guaranteed buyback"}
            />
          </div>
          
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
