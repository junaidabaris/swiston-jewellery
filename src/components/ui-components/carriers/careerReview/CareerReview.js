import React from "react";
import "./careerReview.css";
function CareerReview() {
  return (
    <section className="carrier_review1">
      <div className="container">
        <div className="carrier_review_content1">
          <h1>Reviews</h1>
          <p>
            Discover What People Say: Unveiling Insider Stories from AmbitionBox
            & Glassdoor
          </p>
          <div className="row  justify-content-center m-auto career_review_img_flex">
            <div className="col-lg-4 col-md-6 col-sm-12  career_review_img">
              <img
                src="https://careers.caratlane.com/wp-content/uploads/2024/01/ambitionbox.png"
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 career_review_img">
              <img
                src="https://careers.caratlane.com/wp-content/uploads/2024/01/glasssdoor.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerReview;
