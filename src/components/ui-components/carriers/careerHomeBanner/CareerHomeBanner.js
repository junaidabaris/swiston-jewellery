import React from "react";

import CareerSlideVideo from "../careerSlideVideo/CareerSlideVideo";

function CareerHomeBanner() {
  return (
    <>
      <section className="carriers_background ">
        <div className="container">
          <div className="carrier_content1">
            <h1>Hear From Us</h1>
            <p>
              Driven by a passion to revolutionise the omnichannel experience
              and with a customer-first mentality at the core of our mission,
              our leaders drive the creation of new and innovative solutions to
              enhance the customer journey.
            </p>
          </div>
          {/* career slide video  */}
          <CareerSlideVideo />
        </div>
      </section>
    </>
  );
}

export default CareerHomeBanner;
