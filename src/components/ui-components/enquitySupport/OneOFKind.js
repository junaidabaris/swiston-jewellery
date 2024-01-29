import React from "react";
import image1 from "./image/Responsive_2_1_01.jpg"
import image2 from "./image/2x.jpg"
import image3 from "./image/2X (1).jpg"
import Link from "antd/es/typography/Link";


export default function OneOfKind(){
    return(
        <div className="banner_1">
            <div className="row gx-4">
                <div className="col-12 col-md-6">
                   <Link to="/"><img src={image1} alt="image1"/> </Link>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12">
                        <Link to="/"> <img src={image2} /></Link>
                        </div>
                        <div className="col-12 mt-5">
                        <Link to="/"><img src={image3} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}