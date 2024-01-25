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
          <div className="review_button">
            <button className="btn btn-outline-primary ">
              View In Ambitionbox
            </button>
            <button className="btn btn-outline-primary ml-3">
              View In Glassdoor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerReview;
