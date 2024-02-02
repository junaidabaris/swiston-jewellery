import React from "react";
import "./reward.css";
import { BiSolidMessageDots } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import RewardBox from "../rewardbox/RewardBox";
function Reward() {
  return (
    <div className="reward_content">
      <h2 className="reward_heading">Being Stylish is Rewarding</h2>
      <div className="reward_box_flex">
        <RewardBox
          num={1}
          refer={"What You Get"}
          icon={<BiSolidMessageDots />}
          disc={
            "  Rs. 250* when your friends sign up Rs. 500* on their first purchase"
          }
          background={"#cde9c8"}
          numcolor={{ inner: "#a2e697", outer: "#14740a" }}
          iconColor={"#14740a"}
        />
        <RewardBox
          num={2}
          refer={"What You Get"}
          icon={<MdContacts />}
          disc={
            "  Rs. 250* when your friends sign up Rs. 500* on their first purchase"
          }
          background={"#faeaf4"}
          numcolor={{ inner: "#fbd1dc", outer: "#ff74b7" }}
          iconColor={"#d65eaa"}
        />
        <RewardBox
          num={3}
          refer={"What You Get"}
          icon={<FaCartPlus />}
          disc={
            "  Rs. 250* when your friends sign up Rs. 500* on their first purchase"
          }
          background={"#fbeaea"}
          numcolor={{ inner: "#fcd1d4", outer: "#ff74b7" }}
          iconColor={"#f5647c"}
        />
      </div>
    </div>
  );
}

export default Reward;
