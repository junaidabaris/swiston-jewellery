import React from "react";
import "./Login.css";
import Fingerprint from "../../../images/loginimg/figerprint.gif";
import googleicon from "../../../images/loginimg/google_img.png";
import whatsappicon from "../../../images/loginimg/whatsapp-icon.png";

export default function Login() {
  return (
    <>
      <div className="login-info">
        <div className="finger-print">
          <img src={Fingerprint} alt="fingerprint" />
        </div>
        <div className="login-contant">
          <h4>Login with Swiston</h4>

          <p>
            Login to unlock best prices and become an insider for our exclusive
            launches & offers. Complete your profile and get ₹250 worth of
            xCLusive Points.
          </p>
        </div>
        <div className="button-infor">
          <input type="text" placeholder="Enter Mobile Number or Email" />
          <button className="btn btn-info"> <a href="#"> CONTINUE TO LOGIN</a></button>
        </div>
        <div className="icon-info">
          <div className="icon-social">
             <a href="#"><img src={googleicon} /></a>
          </div>
          <div className="icon-social">
            <a href="#"> <img src={whatsappicon} /></a>
          </div>
          
        </div>
        <span>New to Swiston? <a href="#"> Create an Account</a></span>
      </div>
    
    </>
  );
}
