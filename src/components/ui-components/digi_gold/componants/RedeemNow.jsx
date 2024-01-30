
import "./RedeemNow.css";
import qicon from "../digi_gold_assets/qicon.png";
import LeftBannarIconImage from "../sharedComponants/LeftBannarIconImage";
import gift from "../digi_gold_assets/giftIcon.png";
import Arrow from "../digi_gold_assets/arrow.png";
import  hand from '../digi_gold_assets/handsprize.png'
import  car from '../digi_gold_assets/carImage.png'
import camra from '../digi_gold_assets/camra.png'

const RedeemNow = () => {
  return (
    <div>
      <div className="redeem p-4">
        <p className="redeemP">redeem</p>
        <div className="d-flex justify-content-start gap-5" data-aos="fade-right">
          <h2>
            DigiGld to jewellery, in a<br /> blink!
          </h2>
          <div className="d-flex justify-content-start gap-3 " data-aos="fade-right">
            <img src={qicon} alt="icon" className="qicon" />
            <p className="blurcolor">
              You can redeem CaratLane DigiGld online or <br /> offline through
              one of our many jewellery <br /> partner stores across India.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 p-0">
        <div className="row">
          <div className="col-lg-3 p-0">
            <div className="d-flex align-items-center" data-aos="fade-right">
              <LeftBannarIconImage
                image={gift}
                description={"Choose your favorite jewellery from CaratLane"}
              />
              <div>
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-0 mt-3 " data-aos="fade-left">
            <div className="d-flex align-items-center">
              <LeftBannarIconImage
                image={hand}
                description={"Redeem your Caratlane DigiGld at checkout"}
              />
              <div>
                <img src={Arrow} alt="arrow"  />
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-0 mt-3" data-aos="fade-right">
            <div className="d-flex align-items-center">
              <LeftBannarIconImage
                image={car} 
                description={"Get your jewellery delivered for free at your doorstep"}
              />
            </div>
          </div>
          <div className="col-lg-3 p-0 mt-3" data-aos="fade-right">
            <div className="image_camra p-2">
              <img src={camra} alt="camra" className="size_p" />
              <p className="visit_valt">Visit Vault</p>
              <p>Check your gold Balance</p>
              <button className="btn btn-info text-white">Check your gold Balance</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemNow;
