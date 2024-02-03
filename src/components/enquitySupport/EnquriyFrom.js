import React from "react";
import form from "./image/form.PNG"

export default function Form(){
    return(
        <div className="rForm">
            <div>
                <div className="f_logo"><img src={form} /></div>
                <div><h2>Sign up to be a SwistonJewellery Insider</h2></div>
                <div className="f_text">
                    <input />
                    <button>submit</button>
                </div>
                <div className="d-flex gender">
                    <div><input type="radio" name="gender"/> <label>Female</label></div>
                    <div><input  type="radio"  name="gender"/> <label>Male</label></div>
                    <div><input type="radio"  name="gender"/> <label>other</label></div>
                </div>
                <p><span>know more</span> about SwistonJewellery</p>
            </div>
        </div>
    )
}