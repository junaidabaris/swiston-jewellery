import React from "react";
import "./ReturnPolicy.css"
import TermConditon from "./Term&Condition";

export default function Returnpolicy(){
    return(
        <div className="main_Returnpolicy">
            <div className="main_Returnpolicy_header">
                <h1>ReturnPolicy</h1>
                <p>Go ahead and shop with complete peace of mind!</p>
            </div>
            <div><TermConditon /></div>
        </div>
    )
}