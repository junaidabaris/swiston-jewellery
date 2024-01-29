import React from "react";
import banner1 from "./image/banner-1.jpg"
import banner2 from "./image/banner-2.jpg"
import banner3 from "./image/banner-3.jpg"
import banner4 from "./image/banner-4.jpg"
import banner5 from "./image/banner-5.jpg"
import banner6 from "./image/banner-6.webp"
import Link from "antd/es/typography/Link";


const banner = [
    {id:"0", banner: banner1},
    {id:"2", banner: banner2},
    {id:"3", banner: banner3},
    {id:"4", banner: banner4},
    {id:"5", banner: banner5},
    {id:"5", banner: banner6},
]

export default function Banner(){
    return(
        <div className="banners_wrap">
                <div className="row g-4">
                    {banner?.map((image)=>{
                        return(
                            <div className="col-12 col-md-6">
                                <Link to="/">
                                    <img src={image.banner}/>
                                </Link>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}