import React from "react";
import "../nearLocation/nearLocation.css";
function NearLocation() {
  return (
    <>
      <section className="near_location_background">
        <div className="row near_location_flex">
          <div className="col-md-3">
            <p>
              {" "}
              <strong>BIS</strong> 100% Hallmarked Jewellery
            </p>
          </div>
          <div className="col-md-3">
            <p>
              {" "}
              <strong>Trust of Tanishq</strong>Titan Privileges
            </p>
          </div>
          <div className="col-md-3">
            <p>
              {" "}
              <strong>Swiston Assurity </strong> 100% Swiston Certified
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 location_map_image">
            <img
              src="https://assets.cltstatic.com/images/responsive/map.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6 near_location_content">
            <div className="text-center">
              <h2>Find in Store near you!</h2>
              <p>
                Have to see it to believe it? Check here if the design is
                available in the store or not. You can also book an appointment
              </p>
              <input
                type="search"
                name=""
                id=""
                className="near_search mt-4"
                placeholder=" STORE PINCODE"
              />
              <div className="add_cart">
                <button>VIEW STORE & DESIGN</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NearLocation;
