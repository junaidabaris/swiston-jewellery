import React from "react";
import "./signUpNewsletter.css";
import { BsRocketTakeoffFill } from "react-icons/bs";
function SignUpNewsLetter() {
  return (
    <>
      <section className="signUp_section">
        <div className="work_content">
          <span>
            <BsRocketTakeoffFill />
          </span>
          <h1 className=" mt-4">Sign Up For Our Newsletter</h1>

          <div className="email_section mt-4" style={{}}>
            <input
              type="email"
              className="emailBox"
              placeholder="Please Enter Your Email Id"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
            <button type="submit" class="submitNewsletter_btn submit btn">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpNewsLetter;
