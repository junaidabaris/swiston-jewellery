
import Slider from "react-slick";
import { Testimonialcrd } from "./Testimonialcrd";
function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return <div class="container testimonial">
        <div class="row" style={{marginBottom:"30px"}}>
            <div className="col-12">
                <h4>See What Our Customers Say About Us</h4>
            </div>
            <div className="col-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illum tenetur fuga dignissimos odit amet commodi non officia delectus, praesentium id nam quae dolorem aliquam voluptatum nemo accusantium esse eos.</p>
            </div>
        </div>
        
        <div className="row">
            <div className="col-12">
                <Slider {...settings} className="silktestimonial">
                   <Testimonialcrd/>
                   <Testimonialcrd/>
                   <Testimonialcrd/>
                   <Testimonialcrd/>
                   <Testimonialcrd/>
                   <Testimonialcrd/>
                </Slider>
            </div>
        </div>
    </div>
}
export default Testimonials