import { FaStar } from "react-icons/fa"

function CardsList() {
    return <div className="store-Card">
        <div className="top">
            <div className="embBag">
                <div className="mtxBag">
                    <p>Pacific Jasola Mall</p>
                    <div className="mtxinner">
                        <p><FaStar /> 5 . 328 Google Reviews</p>
                        <a color="#de57e5" rel="noopener noreferrer" target="_blank" className="eambbga9 css-h6onjr epg3bs00"> </a>
                    </div>
                </div>
                <a color="#de57e5" rel="noopener noreferrer" target="_blank" className="navcus eambbga10 css-7nc6re epg3bs00"><span>2km</span></a>
            </div>
            {/* <span data-name="store-facility" class="css-1rp5snc eambbga24">View Store Details</span> */}
            <span class="css-105doze eambbga25">View Store Details</span>
            <div class="css-1idl7oy eambbga14"></div>
            <div className="css-1juu1t5 eambbga26">
                <div data-name="store-address" className="css-1kn1qnp eambbga11">
                    SHGF 15, Ground Floor, Pacific Mall Jasola, Apollo Metro Station CPD-48,
                    Sarita Vihar,Delhi/NCR,110044,
                    <p data-name="store-phone" className="css-1p5hfc eambbga12">
                        Phone-<span>9958780909</span>
                    </p>
                </div>
                <p data-name="store-time" className="css-11ubhq eambbga13">
                    <span>STORE HOURS - </span>11:30 A.M. - 09:00 P.M.
                </p>
            </div>

        </div>
        <div className="bottom">
            <div data-name="whats-app" className="css-134ajpu eambbga19">
                <button style={{ border: "none" }} className="css-1wjn86a eambbga20" />
            </div>
            <button data-name="book-a-visit" class="css-60r1cb eambbga21">BOOK A VISIT</button>
            <a color="#de57e5" rel="noopener noreferrer" target="_blank" data-name="view-all-design" class="eambbga22 css-qtjfy2 epg3bs00">VIEW ALL DESIGNS</a>

        </div>
    </div>
}
export default CardsList