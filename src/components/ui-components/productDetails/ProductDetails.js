import React from "react";
import "../productDetails/productDetails.css";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import NearLocation from "./nearLocation/NearLocation";
import ServiceTileSection from "./serviceTileSection/ServiceTileSection";
import { Link } from "react-router-dom";

import ProductRelatedCategories from "./productRelatedCategories/ProductRelatedCategories";
import SimilarProduct from "./similarProduct/SimilarProduct";
import ProductDetailsLeftSlide from "./productDetailsLeftSlide/ProductDetailsLeftSlide";
import ProductRightSideContent from "./productRightSideContent/ProductRightSideContent";
import ProductCarret from "./productCarret/ProductCarret";

function ProductDetails() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <section>
        <div className="row p-0 m-0">
          <ProductDetailsLeftSlide />

          <ProductRightSideContent />
        </div>
      </section>

      {/* product carret ................. */}
      <ProductCarret />
      <section id="near-location">
        <NearLocation />
      </section>
      <section id="serviceTileSection">
        <ServiceTileSection />
      </section>
      <section id="product_related_categories">
        <ProductRelatedCategories />
      </section>
      <section id="similar-product">
        <SimilarProduct />
      </section>
    </>
  );
}

export default ProductDetails;
