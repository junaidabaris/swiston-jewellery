import React from "react";
import "./FinancialOption.css"
import banner1 from "./image/banner1.png"
import banner2 from "./image/banner2.png"
import img1 from "./image/1.jpg";
import img2 from "./image/2.jpg";
import img3 from "./image/3.jpg";
import img4 from "./image/4.jpg";
import img5 from "./image/5.jpg";
import img6 from "./image/6.jpg";
import img7 from "./image/7.jpg";


export default function FinancialOption(){
    return(
        <div>
            <h1 className="f-option">financial option</h1>
            <div className="row g-5 box">
                <div className="col-12 col-md-6 banner">
                    <img  src={banner1}/>
                </div>
                <div className="col-12 col-md-6 offlineText">
                    <div className="text_wrap">
                        <h3>offline :</h3>
                        <p>Customers can make their purchase payment with Credit Card, Debit card or Online fund transfer.</p>
                        <ul>
                            <li>Credit Card: All Visa,Master and American Express Credit Cards are accepted.</li>
                            <li>Debit Card: All Visa, Maestro and RuPay Debit Cards are accepted.</li>
                            <li>Online Fund Transfer: You can choose from all major banks in India to transfer money.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 banner">
                    <img  src={banner2}/>
                </div>
                <div className="col-12 col-md-6 offlineText">
                    <div className="text_wrap">
                        <h3>online :</h3>
                        <p>Payments can be made with cheque, cash deposit or money transfer through Western Union. Customers making offline payment should contact CaratLane on +91-44-42935000 and confirm his/her payment modalities.</p>
                    </div>
                </div>
            </div>
            <div className="row g-0 gallary">
                <div className="col-12 col-md-4 img-wrap big-img">
                    <img src={img1} alt="1" />
                </div>
                <div className="col-12 col-md-8">
                    <div className="row g-0">
                        <div className="col-12 col-md-4 img-wrap small-img"><img src={img2} alt="2" /></div>
                        <div className="col-12 col-md-4 img-wrap small-img"><img src={img3} alt="2" /></div>
                        <div className="col-12 col-md-4 img-wrap small-img"><img src={img4} alt="2" /></div>
                        <div className="col-12 col-md-4 img-wrap small-img"><img src={img5} alt="2" /></div>
                        <div className="col-12 col-md-4 img-wrap small-img"><img src={img6} alt="2" /></div>
                        <div className="col-12 col-md-4 img-wrap small-img"><img src={img7} alt="2" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}