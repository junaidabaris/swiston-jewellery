import React from "react";

function PressNewsContent({ data }) {
  return (
    <div className="row g-0 elementor_post_row">
      {data?.map((pressNewsArray, index) => {
        return (
          <div
            className="elementor_post col-lg-4 col-md-6 col-sm-12 mb-3"
            key={index}>
            <div className="elementor_post_thumbnail">
              <img
                src={pressNewsArray.imgageSrc}
                className="press_photo_img"
                alt={`news  ${index + 1}`}
              />
            </div>
            <div className="elementor_post_text">
              <h3 className="elementor_post_title">{pressNewsArray.title}</h3>
              <div className="elementor_post_meta_data">
                <span className="elementor_post_date">MARCH 7, 2023</span>
              </div>
              <div className="elementor_post_excerpt">
                <p>{pressNewsArray.excerpt}</p>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default PressNewsContent;
