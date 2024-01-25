import React from "react";
import ReactPlayer from "react-player";
import "./careerAnthem.css";
function CareerAnthem() {
  return (
    <>
      <div className="career_anthem_section">
        <div className="career_video_container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=3eVKNPnS6nQ"
            width="100%"
            height="700px"
            style={{ borderRadius: "10px" }}
            muted
          />
        </div>
        <div className="career_video_text">
          <h4>The Swiston Anthom</h4>
          <p>
            Watch the Swiston Anthem, showcasing the authentic emotion and
            energy of being . Our performing and filming experience was
            incredibly pleasant, extolling the pride we take in our work and who
            we are!
          </p>
        </div>
      </div>
    </>
  );
}
export default CareerAnthem;
