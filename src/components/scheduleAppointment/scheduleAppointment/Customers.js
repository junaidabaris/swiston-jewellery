import React from "react";
import { LiaStarSolid } from "react-icons/lia";
export default function Customers({ data }) {
  return (
    <div>
      <div className="comments">
        <h3 className="ourcustomer-title">{data.name}</h3>

        <span className="custummer-star">
          {data.starts?.map(() => {
            return <LiaStarSolid />;
          })}
        </span>
        <p>
          {data.discription}
        </p>
      </div>
    </div>
  );
}
