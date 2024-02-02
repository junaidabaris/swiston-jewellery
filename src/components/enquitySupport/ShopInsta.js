import React from "react";
import img1 from "../financialOption/image/1.jpg"
import img2 from "../financialOption/image/2.jpg"
import img3 from "../financialOption/image/3.jpg"
import img4 from "../financialOption/image/4.jpg"
import img5 from "../financialOption/image/5.jpg"
import img6 from "../financialOption/image/6.jpg"
import img7 from "../financialOption/image/7.jpg"

export default function ShopBYinsta(){
    return(
        <>
        <ul className="j-story">
            <li>shop our instagram</li>
            <li> #MySwistonJewelleryStory</li>
        </ul>
        <div className="row g-0 gallary s-mt">
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
        </>
    )
}