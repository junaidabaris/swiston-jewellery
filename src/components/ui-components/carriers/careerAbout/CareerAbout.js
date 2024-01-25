import React from "react";
import "./careerAbout.css";
function CareerAbout() {
  return (
    <>
      <section className="Carrier_feature_reads">
        <div className="container">
          <div>
            <div className="Carrier_feature_content1">
              <h1>About Us</h1>
              <p>
                Discover CaratLane's mission to express emotions through
                jewelry. Journey with us from our humble beginnings in 2008 to a
                leading jewelry brand in 2023.
              </p>
              <button className=""> Know More</button>
            </div>
            <div className="row about_photo1 ">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <img
                  className="image11"
                  src="https://careers.caratlane.com/wp-content/uploads/2023/06/Aboutus-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <img
                  className="image21"
                  src="https://careers.caratlane.com/wp-content/uploads/2023/06/Aboutus-2.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <img
                  className="image31"
                  src="https://careers.caratlane.com/wp-content/uploads/2023/06/Aboutus-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default CareerAbout;
