import React from "react";
import NewsTab from "../press/newsTab/NewsTab";
import Newsletter from "../press/newsLetter/Newsletter";
import { Outlet } from "react-router-dom";

function EditPressProfile() {
  return (
    <div>
      {/* <Newsletter /> */}
      <NewsTab />
      <Outlet></Outlet>
    </div>
  );
}

export default EditPressProfile;
