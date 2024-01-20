import React from "react";
import worldbestimg from "../../images/EarPriceMilestoneimg/world-best-diamond.jpg"
import "../../Components/EarPriceMilestones/WorldClass.css"
const WorldClass = () => {
  return (
    <>
      <section className="best-diamond">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
                 <img src={worldbestimg} className="w-100 h-100 world-best-diamond"/>
            </div>
            <div className="col-lg-6">
              <div className="world-diamond-contant w-100 h-100">
              <h2>World-class equipment for an easy piercing experience</h2>
              <p>
                Our skilled ear piercers have been trained by industry experts,
                and they are committed to providing you with a perfect piercing
                each & every time.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorldClass;
