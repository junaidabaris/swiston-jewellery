import React from "react";
import "../callSchedule/callSchedule.css";
import { FaVideo } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
function CallSchedule() {
  return (
    <>
      <div className="row mt-3">
        <div className="col-md-6 m-0 p-0">
          <div className="call_box">
            <div className="d_flex">
              <span className="video_call_icon">
                <FaVideo />
              </span>
              <div className="call_content">
                <h6>Want a closer look?</h6>
                <p>Get on a live video call with our design consultants.</p>
              </div>
            </div>
            <button className="call_schedule_btn">
              Schedule a Video Call{" "}
            </button>
          </div>
        </div>
        <div className="col-md-6 m-0 p-0">
          <div className="call_box">
            <div className="d_flex">
              <span className="video_call_icon homeColor">
                <FaHome />
              </span>
              <div className="call_content">
                <h6>Try it on at home</h6>
                <p>
                  Book a free appointment to try this jewellery at your home.
                </p>
              </div>
            </div>
            <button className="call_schedule_btn btnColor">
              Book Home Appointment{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallSchedule;
