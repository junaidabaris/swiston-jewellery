import React from "react";
import "../../Components/EarPriceMilestones/Professionals.css";
import dddd from "../../images/EarPriceMilestoneimg/desktop-video-banner.mp4";
export const Professionals = () => {
  return (
    <section>
      <div className="conatiner">
        <div className="row">
          <div className="col-lg-6">
            <h1>Professionals provide a hygienic & precise procedure</h1>
            <p>
              Our experts take great care & precautions both before & during the
              ear piercing procedure, maintaining a high standard of hygiene for
              our customers.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="ddddddddd">
              <video autoPlay loop className="w-100">
                <source src={dddd}></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
