import React from "react";
import img from "../../../../assets/img/digi.png";
import Bannar from "../componants/Bannar";
import KnowMore from "../componants/KnowMore";
import "./DigiGold.css";
import RedeemNow from "../componants/RedeemNow";
import dailCall from "../digi_gold_assets/dailCall.png";
import AccorodionCompo from "../componants/AccorodianCompo";
import thinkingsvg from '../digi_gold_assets/man-thinking-while-doing-work-in-laptop.svg';
import Loan from '../digi_gold_assets/loan.png';
import Sell from '../digi_gold_assets/sell.png'
const genralData =[
{id:1,description:'Digital Gold is an organised and transparent method of buying 24-Carat gold in compliance with all applicable laws and regulations.Digital Gold is neither a financial product nor a deposit but a method of purchasing gold for your personal needs.Digital Gold gives the flexibility for customers to accumulate gold in any denomination, say as low as Rs. 10.Physical gold will be bought by service providers and stored in very safe vaults for the customer. Customers need not go through the hassle of storing and securing the gold.At the same time, customers have the flexibility to sell the gold at any time, convert to physical gold and ask for delivery or exchange digital gold for physical jewellery at a CaratLane website or store.' , heading:'What is digital gold?'},
{id:2,description:'CaratLane Digital Gold is a service offered by CaratLane to enable customers to accumulate digital gold, sell at any time, or exchange for physical Jewellery on the CaratLane website or at Caratlane outlets.CaratLane takes care of selling gold to the customers, storing, and buyback from customers, while providing a seamless experience for customers to buy any jewellery from CaratLane through the sale proceeds of customers gold balance.' , heading:'What is CaratLane Digital Gold?'},
{id:3 ,heading:'How to buy CaratLane Digital Gold?', description:'Gold can be accumulated under the CaratLane Digital Gold Program by buying through:'},
{
  id:4,
  heading:'What is the purity of gold bought under CaratLane Digital Gold?',
  description:'CaratLane Digital Gold offers 24-Carat gold of 995 fineness (99.99% pure) or higher.CaratLane sources “good delivery” bars from trusted sources for the digital gold offered to you.'
},
{
  id:5,
  heading:'Why are the CaratLane Digital Gold rates different from CaratLane Jewellery gold rates?',
  description:'CaratLane Digital Gold is in bullion form and is safely stored in a central vault.There is no movement for this gold. But for jewellery, the gold has to travel between multiple entities to get the product manufactured.The logistics costs incurred by the jewellery gold are substantially different from the gold stored in the central vault. Hence, the jewellery gold rate will always be higher than the digital gold.'
},
{
  id:6,
  heading:'I have some other queries about my CaratLane Digital Gold Account. Who can I get in touch with?',
  description:'You can write to contactus@caratlane.com or call us at +91-44-42935000 or WhatsApp at +91 69000 86000'
},
{
  id:7,
  heading:'Is my CaratLane Digital Gold kept in safe custody?',
  description:'Yes. The gold purchased on your behalf is stored with BVC, one of the leading safe keepers of precious metals across the world.The gold is insured, both for storage and transit when being delivered to you. Further, the external administrator has a charge on all gold stored in the vault in your favourThis ensures that your gold is protected at all times regardless of any external events'
},{
  id:8,
  heading:'Is the Physical Vault Insured?',
  description:' Yes. The secure storage provider (BVC) has a comprehensive, global insurance policy that includes the insurance cover on your gold stored in their vaults.'
}
]
const DigGold = () => {
  return (
    <div className="bannar" >
      <div >
        <Bannar />
      </div>
      <div className="knowmoreP">
        <div className="knowMore" >
          <KnowMore />
        </div>
      </div>
      <div className="redeemNowP">
        <div className="knowMore" >
          <RedeemNow />
        </div>
      </div>
      <div>
        <div className="knowMore">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-6 col-sm-12" >
                <p className="knowmoreP">
                  Got questions? We have all the answers!
                </p>
                <h2 className="knowmoreheading">
                  If you have any questions regarding CaratLane DigiGld, give us
                  your phone number and we will call you back to answer your
                  questions.
                </h2>
              </div>
              <div className="col-lg-6 col-sm-12 align-self-center" >
                <img src={dailCall} alt="" className="dailCall" />
                <p>At Your Service. Always.</p>
                <form  >
                  <div className="form-row align-items-center">
                    <div className=" my-1">
                      <label className="sr-only" htmlFor="inlineFormInputName">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputName"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className=" my-1">
                      <label
                        className="sr-only"
                        htmlFor="inlineFormInputGroupUsername"
                      >
                        Mobile No
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                         
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          id="inlineFormInputGroupUsername"
                          placeholder="Mobile No"
                        />
                      </div>
                    </div>
                    <div className=" my-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="autoSizingCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="autoSizingCheck2"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className=" my-1">
                      <button type="submit" className="btn btn-primary">
                        Reaquest Call Back
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row pt-5">
            <h2>General</h2>
              <div className="col-lg-4 sm-none lg-block align-self-center" >
                <img src={thinkingsvg} alt="thinking " />
                 </div>
              <div className="col-lg-8" >
               {genralData.map((item)=>{
                return  (
                  <div key={item.id} className="m-2">
                    <AccorodionCompo  id={item.heading} heading={item.heading} description={item.description}/>
                  </div>
                )
               })}
              </div>
            </div>
            <div className="row pt-5" >
            <h2>BUY</h2>
              <div className="col-lg-4 sm-none lg-block align-self-center" >
                <img src={Loan} alt="thinking " />
                 </div>
              <div className="col-lg-8" >
               {genralData.map((item)=>{
                return  (
                  <div key={item.id} className="m-2">
                    <AccorodionCompo  id={item.heading} heading={item.heading} description={item.description}/>
                  </div>
                )
               })}
              </div>
            </div>
            <div className="row pt-5">
            <h2>SELL</h2>
              <div className="col-lg-4 sm-none lg-block align-self-center" >
                <img src={thinkingsvg} alt="thinking " />
                 </div>
              <div className="col-lg-8" >
               {genralData.map((item)=>{
                return  (
                  <div key={item.id} className="m-2">
                    <AccorodionCompo  id={item.heading} heading={item.heading} description={item.description}/>
                  </div>
                )
               })}
              </div>
            </div>
            <div className="row pt-5">
            <h2>EXCHANGE</h2>
              <div className="col-lg-4 sm-none lg-block align-self-center" >
                <img src={thinkingsvg} alt="thinking " />
                 </div>
              <div className="col-lg-8">
               {genralData.map((item)=>{
                return  (
                  <div key={item.id} className="m-2">
                    <AccorodionCompo  id={item.heading} heading={item.heading} description={item.description}/>
                  </div>
                )
               })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigGold;
