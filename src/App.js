import { useEffect, useState } from "react";
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
import EditPressProfile from "./components/editPressProfile/EditPressProfile";
import PRess from "./pages/referandEarn/pRess";
import Jewellaryedit from "./pages/jewellaryEDit";
import Webstories from "./pages/webStories";
import WishList from "./pages/wishlist";
import RegisterPage from "./components/register/registerPage/RegisterPage";
import Returnpolicy from "./components/15DayReturns/ReturnPolicy";
import BlogPage from "./components/blogPost/blogPage/BlogPage";
import DigGold from "./components/digi_gold/page/DigGold";
import Login from "./components/loginForm/Login";
import TestimonialPage from "./pages/testimonial/Index";
import VedioGallerypage from "./pages/vedio-gallery/Index";
import StorePage from "./pages/storePage";
import Aos from "aos";
import 'aos/dist/aos.css';
import FinancialOptionS from "./components/financialOption/FinancialOption";
import ScheduleMain from "./components/scheduleAppointment/scheduleAppointment/ScheduleMain";
import ShippingPolicy from "./components/shippingPolicy/ShippingPolicy";
import OurStory from "./pages/our-story";
import PhotoMain from "./components/photoGallery/PhotoMain";
import EnquirySupport from "./components/enquitySupport/EnquirySupport";
import Checkout from "./components/checkout/Checkout";
function App() {
    const [show, setShow] = useState(false)
    useEffect(()=>{
        Aos.init({
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
                        <Route path="/schedule_appointment" element={<ScheduleMain />} />
                        <Route path="/category" element={<CategoryPage />} />
                        <Route path="/carriers" element={<Carriers />} />
                        <Route path="/product-details/:uid" element={<ProductDetails />} />
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
                        <Route path="/wishList" element={<WishList />} />
                        <Route path="/press" element={<EditPressProfile />}>
                            <Route path="" element={<PRess />} />
                            <Route path="edit-jewellery" element={<Jewellaryedit />} />
                            <Route path="web-stories" element={<Webstories />} />
                        </Route>
                        <Route path="/login" element={<Login/>} /> 
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/returnpolicy" element={<Returnpolicy/>} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/digi_gold" element={<DigGold />} />
                        <Route path="/testimonial" element={<TestimonialPage />} />
                        <Route path="/vedio-gallery" element={<VedioGallerypage />} />
                        <Route path="/photo-gallery" element={<PhotoMain />} />
                        <Route path="/stors" element={<StorePage/>} />
                        <Route path="/financialoption" element={<FinancialOptionS />} />
                        <Route path="/shipping-policy" element={<ShippingPolicy/>} /> 
                        <Route path="/our-story" element={<OurStory/>} /> 
                        <Route path="/enquiry-support" element={<EnquirySupport />} />

                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
