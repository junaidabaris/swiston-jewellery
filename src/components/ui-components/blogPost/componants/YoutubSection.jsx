import React from "react";
import "./YoutubSection.css";
import ReactPlayer from "react-player";
const YoutubSection = () => {
  return (
    <div className="container youtubeSection">
      <div className=" borderwhite">
        <span className="videoPlaceholder">
          <ReactPlayer
            width={"997px"}
            height={"573px"}
            url={
              "https://www.youtube.com/watch?v=3pBcQFj2jYI&ab_channel=CaratLane"
            }
          />
        </span>
        <div className="vlog">VLOG</div>
        <h2 className="vlog_heading">
          Everyday Vows: Mangalsutra Collection by CaratLane
        </h2>
      </div>
      <div className=" sujestion container-fluid mt-5">
        <div className="row">
          <div className=" bordergray col-lg-4 col-sm-12 bordergray1">
              <div>
                <ReactPlayer
                  url={
                    "https://www.youtube.com/watch?v=sPt6KTUpUEs&ab_channel=CaratLane"
                  }
                  width={"100%"}
                  height={"200px"}
                />
              </div>
          
          </div>
          <div className=" bordergray col-lg-4 col-sm-12 bordergray2">
            {" "}
            <div>
              <ReactPlayer
                url={
                  "https://www.youtube.com/watch?v=sPt6KTUpUEs&ab_channel=CaratLane"
                }
                width={"100%"}
                height={"200px"}
              />
            </div>
          </div>
          <div className=" bordergray col-lg-4  col-sm-12 ">
            <a href="">Check out our YouTube channel </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubSection;
