import React from "react";
import "./ReturnPolicy.css"
import TermConditon from "./Term&Condition";
import { Link } from "react-router-dom";
import MoneyExchange from "./MoneyExchange";

export default function Returnpolicy(){
    return(
        <div className="main_Returnpolicy">
            <div className="main_Returnpolicy_header">
                <h1>ReturnPolicy</h1>
                <p>Go ahead and shop with complete peace of mind!</p>
            </div>
            <div><TermConditon /></div>

            <div className="mt-5">
                <p className="text_contact">For any queries, feel free to contact us:</p>
                <div className="btn_contact d-flex">
                    <div>
                        <Link to="/">call us</Link>
                    </div>
                    <div>
                        <Link to="/">chat now</Link>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <MoneyExchange />
            </div>
        </div>
    )
}