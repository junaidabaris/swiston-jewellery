import React from "react";
import { IoIosArrowForward } from "react-icons/io";
function ProductDetailsBreadcrumb() {
  return (
    <>
      <div className="breadcrumbs">
        <p>
          Home{" "}
          <span>
            <IoIosArrowForward />
          </span>
        </p>
        <p>
          Rings{" "}
          <span>
            <IoIosArrowForward />
          </span>
        </p>
        <p>
          Diamond Rings{" "}
          <span>
            <IoIosArrowForward />
          </span>
        </p>
        <p>Infinty Fore Life Diamond Ring </p>
      </div>
    </>
  );
}

export default ProductDetailsBreadcrumb;
