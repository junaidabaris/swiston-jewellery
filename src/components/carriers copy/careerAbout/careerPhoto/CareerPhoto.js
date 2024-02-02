import React from "react";
const aboutPhoto = [
  {
    imgeUrl:
      "https://careers.caratlane.com/wp-content/uploads/2023/06/Aboutus-1.jpg",
    imgeUrl:
      "https://careers.caratlane.com/wp-content/uploads/2023/06/Aboutus-2.jpg",
    imgeUrl:
      "https://careers.caratlane.com/wp-content/uploads/2023/06/Aboutus-3.jpg",
  },
];
function CareerPhoto() {
  return (
    <>
      {aboutPhoto.map((aboutPhoto, index) => {
        return (
          <div className="row about_photo1 " key={index}>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img className="image11" src={aboutPhoto.imgeUrl} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CareerPhoto;
