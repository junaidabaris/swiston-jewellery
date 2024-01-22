import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Headers from "./common/headers/Headers";
import "bootstrap/dist/css/bootstrap.css";

import Footer from "./common/footer/Footer";
import "../src/assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carriers from "./components/carriers/Carriers";
import Home from "./components/home/Home";
import ProductDetails from "./components/productDetails/ProductDetails";

import GoldRate from "./components/GoldRate/GoldRate";
import DiamondBuyGuide from "./components/DiamondBuyingGuide/DiamondBuyGuide";
import ProductSelectSize from "./components/productDetails/productSelectSize/ProductSelectSize";
// import Category from "./components/category/Category";
// import GemstoneGuide from "./components/GemstoneGuide/GemstoneGuide";
import ReferAndEarn from "./components/referAndEarn/ReferAndEarn.";
import { GemstoneGuide } from "./components/GemstoneGuide/GemstoneGuide";
import JewelleryBuyGuide from "./components/jewelleryBuyGuide/JewelleryBuyGuide";
import GoldExchange from "./pages/gold-exchange/Index";
import TrendingSearche from "./components/TrendingSearches/TrendingSearche";
import Cart from "./components/cart/componants/Cart";
import CategoryPage from "./pages/category";
import {  useGetCategoriesQuery } from "./apiConfig/jwellerySlice";
function App() {
    const [show, setShow] = useState(false)
    return (
        <>
            <div>
                <BrowserRouter>
                    <Headers setShow={setShow} />
                    <TrendingSearche show={show} setShow={setShow} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category" element={<CategoryPage />} />

                        <Route path="/carriers" element={<Carriers />} />
                        <Route path="/product-details" element={<ProductDetails />} />
                        {/* <Route path="/trending-search" element={<TrendingSearche />} /> */}
                        <Route path="/gold-rate" element={<GoldRate />} />
                        <Route path="/diamond-buy-guide" element={<DiamondBuyGuide />} />
                        <Route path="/gemstone-guide" element={<GemstoneGuide />} />
                        <Route
                            path="/product-select-size"
                            element={<ProductSelectSize />}
                        />
                        <Route path="/refer-and-earn" element={<ReferAndEarn />} />
                        <Route path="/jewellery-guide" element={<JewelleryBuyGuide />} />
                        <Route path="/gold-exchange" element={<GoldExchange />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
