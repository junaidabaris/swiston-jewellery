import React from "react";
import "./Photos.css";
import photo1 from "../../assets/photoGalleryimg/photo1.jpg";
import photo2 from "../../assets/photoGalleryimg/photo2.jpg";
import photo3 from "../../assets/photoGalleryimg/photo3.jpg";
import photo4 from "../../assets/photoGalleryimg/photo4.jpg";

export default function Photos(props) {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="photos-gallery">
              <img src={photo1} />
               
            </div>
          </div>  
          <div className="col-lg-3 my-2">

          <div className="photos-gallery">
              <img src={photo2} />
            </div>
          </div>
          <div className="col-lg-3 my-2">
            
          <div className="photos-gallery">
              <img src={photo3} />
            </div>
          </div>

          <div className="col-lg-3 my-2"> 
              
          <div className="photos-gallery">
              <img src={photo4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
