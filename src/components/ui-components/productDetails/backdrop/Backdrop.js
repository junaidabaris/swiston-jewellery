import React from "react";
import "../sidebar/sidebar.css";
function Backdrop({ onClick, open }) {
  return (
    <div
      className={open ? "backdrop backdrop-open" : "backdrop"}
      onClick={onClick}></div>
  );
}

export default Backdrop;
