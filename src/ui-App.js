import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Headers from "./common/headers/Headers";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./common/footer/Footer";
import "../src/assets/css/style.css";
import { BrowserRouter, Route, Routes, useFetcher } from "react-router-dom";
import Carriers from "./components/ui-components/carriers/Carriers";
import Home from "./components/ui-components/home/Home";
import ProductDetails from "./components/ui-components/productDetails/ProductDetails";
import GoldRate from "./components/ui-components/GoldRate/GoldRate";
import DiamondBuyGuide from "./components/ui-components/DiamondBuyingGuide/DiamondBuyGuide";
import ProductSelectSize from "./components/ui-components/productDetails/productSelectSize/ProductSelectSize";
import Category from "./components/ui-components/category/Category";
// import GemstoneGuide from "./components/ui-components/GemstoneGuide/GemstoneGuide";
import { GemstoneGuide } from "./components/ui-components/GemstoneGuide/GemstoneGuide";
import JewelleryBuyGuide from "./components/ui-components/jewelleryBuyGuide/JewelleryBuyGuide";
import GoldExchange from "./pages/gold-exchange/Index";
import TrendingSearche from "./components/ui-components/TrendingSearches/TrendingSearche";
import Cart from "./components/ui-components/cart/componants/Cart";
import RegisterPage from "./components/ui-components/register/registerPage/RegisterPage";
import ReferandEarn from "./pages/ui-pages/referandEarn/ReferandEarn";
import BlogPage from "./components/ui-components/blogPost/blogPage/BlogPage";
import PRess from "./pages/ui-pages/referandEarn/pRess";
import Jewellaryedit from "./pages/ui-pages/jewellaryEDit";
import NewsTab from "./components/ui-components/press/newsTab/NewsTab";
import EditPressProfile from "./components/ui-components/editPressProfile/EditPressProfile";
import Webstories from "./pages/ui-pages/webStories";
import ShippingPolicy from "./components/ui-components/shippingPolicy/ShippingPolicy";
import Login from "./components/ui-components/loginForm/Login";
import AOS from 'aos';
import 'aos/dist/aos.css';

import JewellaryEdit from "./components/press/jewellaryEdit/JewellaryEdit";
import DigGold from "./components/ui-components/digi_gold/page/DigGold";
import Returnpolicy from "./components/ui-components/15DayReturns/ReturnPolicy";
function UIApp() {
  const [show, setShow] = useState(false);
  useEffect(()=>{
    AOS.init({
      delay: 200,
      duration: 800, 
      easing: 'ease-in-out',
    });
  },[])
  return (
    <>
      <div>
        <BrowserRouter>
          <Headers setShow={setShow} />
          <TrendingSearche show={show} setShow={setShow} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
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
            <Route path="/refer-and-earn" element={<ReferandEarn />} />
            <Route path="/jewellery-guide" element={<JewelleryBuyGuide />} />
            <Route path="/gold-exchange" element={<GoldExchange />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/returnpolicy" element={<Returnpolicy />} />

            <Route path="/press" element={<EditPressProfile />}>
              <Route path="" element={<PRess />} />
              <Route path="edit-jewellery" element={<JewellaryEdit />} />
              <Route path="web-stories" element={<Webstories />} />
             
            </Route>
            <Route path="/shipping-policy" element={<ShippingPolicy/>} /> 
            <Route path="/login" element={<Login/>} /> 

            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/digi_gold" element={<DigGold/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default UIApp;
