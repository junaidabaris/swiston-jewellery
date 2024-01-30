import React from "react";
import "./OurBestsellers.css";
import { MdLocationOn } from "react-icons/md";

export default function OurBestsellers() {
  return (
    <>
      <section>
        <div className="our-pick">
          <div className="our-bestellers">
            <h3>Pick from Our Bestsellers</h3>
            <div className="top-input">
              <div className="ourbest-input">
                <div className="d-flex icon-contant">
                  <MdLocationOn />

                  <small>Enter Pincode</small>
                </div>

                <input type="text" />
              </div>
             < button className="our-bestbutton">Submit</button> 
                <span >OR</span>
                < button className="locetme-button">Locate me</button> 
                      
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
