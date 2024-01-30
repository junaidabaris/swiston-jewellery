import React from "react";
import "./GiveHerGift.css";
import giftimg1 from "../../../assets/scheduleAppointment/gift-image1.png";
import giftimg2 from "../../../assets/scheduleAppointment/gift-image2.png";

const GiveHerGift = () => {
  const giftData = [
    {
      id: 1,
      isGift: "false",
      image: giftimg1,
      title: "Give Her the Gift of Choice!",
      discription:
        " Book a surprise Try at Home and let her pick from 5 stunning designs.",
    },
    {
      id: 1,
      isGift: "false",
      image: giftimg2,
      title: "Ensure the Perfect Fit... ",
      discription: " Always. ",
    },
  ];

  return (
    <>
      <div className="container-fluid my-4">
        <div className="row">
          {/* here map function start  */}
          {giftData?.map((items) => {
            const { id, image, title, discription, isGift } = items;
            return (
              <div className="col-lg-6 col-sm-12 mb-4 ">
                <div className="gift-contant">
                  <div className="gift-image">
                    <img src={image} />
                  </div>
                  <div className="gift-title">
                    <h3>{title}</h3>
                    <p>{discription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default GiveHerGift;
