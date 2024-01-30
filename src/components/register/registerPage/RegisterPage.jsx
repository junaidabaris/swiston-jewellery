import React from "react";
import "./RegisterPage.css";
import FrontDiscription from "../componants/FrontDiscription";
import FromAssemble from "../componants/From";
import Icon from "../componants/assets/whatsapp-icon.png";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="registerPage">
      <div className="">
        <FrontDiscription />
      </div>
      <div className="form-assemble">
        <FromAssemble />
      </div>
      <div className="notification_bannar">
        <div className="d-flex align-items-center justify-content-center">
          <div className="bg-round d-flex align-items-center justify-content-center">
            <input type="checkbox" />
          </div>
          <div className="">
            <h4>Opt for Whatsapp Support</h4>
            <p>
              We will be sharing Delivery & precious order related
              communication. Also provide you with an interactive whatsapp
              support
            </p>
          </div>
        </div>
        <div className="whats_icon">
          <img src={Icon} alt="whatsapp icon" />
        </div>
      </div>
      <div className="d-flex gap-4 radio_button">
        <div>
          <label className="d-flex gap-1">
            <input type="radio" name="gender" value="male" />
            <strong> Male</strong>
          </label>
        </div>

        <div>
          <label className="d-flex gap-1">
            <input type="radio" name="gender" value="female" />
            <strong>Female</strong>
          </label>
        </div>

        <div>
          <label className="d-flex gap-1">
            <input type="radio" name="gender" value="notSpecified" />
           <strong> Not Specified</strong>
          </label>
        </div>
      </div>
      <button className="signupbutton">
      Sign me up
    </button>
    <div>
      <p>Already have an account? <Link className="" style={{color:'#F0ABEA'}}> LOG IN</Link></p>
    </div>

    </div>
  );
};

export default RegisterPage