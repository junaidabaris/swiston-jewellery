import React from "react";
import Input from "./form/Input";
import CountrySelector from "./form/CountrySelector";

const FromAssemble = () => {
  return (
    <>
      <div className="input_align ">
        <Input
          type="number"
          placeholder="Mobile No"
          componant={<CountrySelector />}
        />
        <Input type="email" placeholder="Enter Email" />
      </div>
      <div className="input_align">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
      </div>
      <div className="input_align ">
        <Input type="password" placeholder="Passwords" password={true} />
        <Input
          type="password"
          placeholder="Compfirm Password"
          password={true}
        />
      </div>
      <ul className="discStyle" >
        <li><div className="disc"></div> 8 Chrs</li>
        <li> <div className="disc"></div>1 Lowercase</li>
        <li> <div className="disc"></div>1 Uppercase</li>
        <li> <div className="disc"></div>1 Symbol</li>
        <li> <div className="disc"></div>1 Number</li>
      </ul>
    </>
  );
};
export default FromAssemble;
