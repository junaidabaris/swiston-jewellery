import React from "react";
import "./PhotoGallery.css";
export default function PhotoGallery() {
  const photoGallery = [
    {
      id: 1,
      image: "OurPhotoGallery/photogallery1.webp",
    },
    {
      id: 1,
      image: "OurPhotoGallery/photogallery2.webp",
    },
    {
      id: 1,
      image: "OurPhotoGallery/photogallery3.jpg",
    },
    {
      id: 1,
      image: "OurPhotoGallery/photogallery4.jpg",
    },
    {
      id: 1,
      image: "OurPhotoGallery/photogallery5.jpg",
    },
    {
      id: 1,
      image: "OurPhotoGallery/photogallery6.jpg",
    },

    {
      id: 1,
      image: "OurPhotoGallery/photogallery7.jpg",
    },
    {
      id: 1,
      image: "OurPhotoGallery/photogallery8.jpg",
    },
    {
      id: 1,
      image: "OurPhotoGallery/photogallery9.jpg ",
    },
  ];
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-12 col-sm-6 ">
            <h2>Our Photo Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores illum tenetur fuga dignissimos odit amet commodi non
              officia delectus, praesentium id nam quae dolorem aliquam
              voluptatum nemo accusantium esse eos.
            </p>
          </div>

          {photoGallery.map((items) => {
            const { id, image } = items;
            return (
              <div className="col-lg-4 my-5">
                <div className="photo-gallery">
                  <img src={image} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
