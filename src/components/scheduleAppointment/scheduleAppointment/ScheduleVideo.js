import React from "react";
import style from "./ScheduleVideo.module.css";
import backgroundVideoUrl from "../../../assets/scheduleAppointment/TAH-Desktop-Snippet.mp4";
import { MdSlowMotionVideo } from "react-icons/md";

function ScheduleVideo() {
  return (
    <div className={style.videoBackground}>
      <video autoPlay loop muted>
        <source src={backgroundVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Your component content goes here */}
      <div className={style.videoContant}>
        <h2 className={style.h1}>Your Favourite Designs at Your Doorstep!</h2>
        <div className={style.videoInput}>
          <input
            spellcheck="false"
            className={style.input}
            name="pincode"
            placeholder="Enter Pincode"
            value=""
          />
          <button className={style.button}>See Design</button>
        </div>
            <span className={style.videoIcon}><MdSlowMotionVideo/></span>
            <p>See How it Works</p>

      </div>
    </div>
  );
}
export default ScheduleVideo;
