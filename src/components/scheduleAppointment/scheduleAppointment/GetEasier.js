import React from "react";
import "./GetEasier.css";
import around1 from "../../../assets/scheduleAppointment/around-the-world.gif";
import around2 from "../../../assets/scheduleAppointment/video-camera.gif";
import around3 from "../../../assets/scheduleAppointment/love.gif";
import around4 from "../../../assets/scheduleAppointment/shopping.gif";

export default function GetEasier() {
  const easierData = [
    {
      id: 1,
      isEasier: "false",
      image: around1,
      title: "Pick your favourite designs online",
      discription: "Add Minimum 1 design",
    },
    {
      id: 1,
      isEasier: "false",
      image: around2,
      title: "Book an appointment (It’s Free!)",
      discription: "Select your convenient date,time and place.",
    },
    {
      id: 1,
      isEasier: "false",
      image: around3,
      title: "Try the designs",
      discription:
        "Our Try at Home consultants will get you your chosen designs - at home or at work!",
    },
    {
      id: 1,
      isEasier: "false",
      image: around4,
      title: "Buy Only if You like",
      discription:
        "Buy on the spot! And if you don't like it, there's no obligation to buy.",
    },
  ];
  return (
    <>
      <div className="container text-center">
         <div className="geteasir-heading">
         <h3>It Doesn't Get Easier than This!</h3>
        <p>It’s free and there’s no obligation to buy!</p>
         </div>
        <div className="row pt-3">
          {easierData?.map((items) => {
            const { id, image, title, isEasier, discription } = items;
            return (
              <div className="col-lg-3 p-5">
                <div class="get-easier">
                  <img src={image} class="card-img-top" alt="img not found" />
                  <div class="geteasier-body">
                    <h5 class="geteasier-title">{title}</h5>
                    <p class="geteasier-text"> {discription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
