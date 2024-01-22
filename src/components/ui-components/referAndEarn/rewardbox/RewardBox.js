import React from "react";

function RewardBox({
  num,
  refer,
  icon,
  disc,
  background,
  numcolor,
  iconColor,
}) {
  return (
    <>
      <div className="reward_box" style={{ backgroundColor: background }}>
        <div
          className="reward_num"
          style={{ backgroundColor: numcolor?.inner, color: numcolor?.outer }}>
          {num}
        </div>
        <div className="reward_icons">
          <span className="" style={{ color: iconColor }}>
            {icon}
          </span>
        </div>
        <p className="what_refer">{refer}</p>
        <p className="refer_about">{disc}</p>
      </div>
    </>
  );
}

export default RewardBox;
