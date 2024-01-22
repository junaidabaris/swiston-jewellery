import React from "react";
import "../../Components/EarPriceMilestones/EarPriceMilestone.css";
import playvideo from "../../images/EarPriceMilestoneimg/desktop-video-banner.mp4";
 import WorldClass from "../../Components/EarPriceMilestones/WorldClass"
import { Professionals } from "./Professionals";
export const EarPriceMilestone = () => {
    let commonData = [
             {
                img:"",
                title:"World-class equipment for an easy piercing experience",
                paragraf:"Our skilled ear piercers have been trained by industry experts, and they are committed to providing you with a perfect piercing each & every time.",
             },
             {
                img:"",
                title:"Professionals provide a hygienic & precise procedure",
                paragraf:"Our experts take great care & precautions both before & during the ear piercing procedure, maintaining a high standard of hygiene for our customers.",
             },
             {
                img:"",
                title:"A Quick & Painless Procedure",
                paragraf:"To ensure that your ear piercing experience is swift & painless, our professionals conduct the procedure, adhering to all safety precautions.",
             },
             {
                img:"",
                title:"Almost Free Of Cost Experience",
                paragraf:"Experience the ultimate ear-piercing journey! Invest only in the earrings you'll get pierced with and get vouchers to redeem for future purchases.",
             },  
    ];
  return (
    <>
      <section>
        <div className="vedio">
          <video
            autoPlay
            loop
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
              opacity: "5.5",
            }}
          >
            <source src={playvideo} type="video/mp4" />
          </video>
        </div>
        <div>
          <div className="container m-auto">
            <div className="video-contant">
              <h2>
                Ear Piercing Milestones, <br /> marked by Swiston
              </h2>
              <p>
                Making every ear piercing feel as special as your first one.
              </p>
              <p>
                {" "}
                We celebrate each milestone with world-class equipment, <br />
                trained professionals, and a painless procedure!
              </p>
              <a href="#" className = "btn mt-5">BOOK AN APPOINTMENT</a>
            </div>
          </div>
        </div>
        
      </section>
      <WorldClass/>
      <WorldClass/>
      <Professionals/>
    </>
  );
};
