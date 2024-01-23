import React, { useState } from "react";
import "./Input.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

const Input = ({ type, title, placeholder, componant, password }) => {
  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="input_placeholder ">
          {componant && componant}
          <input
            type={showPassword ? type : password|| "text"}
            placeholder={placeholder}
            className="custom_input"
          />
          {password && (
            <span className="password_icon" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FaRegEyeSlash fontSize={"24px"} />
              ) : (
                <LuEye fontSize={"24px"} />
              )}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
