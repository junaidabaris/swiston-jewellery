import React from "react";
import "../DiamondBuyingGuide/DiamondBuyGuide.css";
import diamondbuy from "../../images/DiamondBuyGuideImg/top-diamond.jpg";

import {
  GiEmeraldNecklace,
  GiEmerald,
  GiChainedHeart,
  GiHeartNecklace,
  GiDropEarrings,
} from "react-icons/gi";
import { TbSquareRounded } from "react-icons/tb";
import anomatie from "../../images/DiamondBuyGuideImg/0cccb686b24340568b61d2f4f5131872.jpg";
import { MdOutlineApproval } from "react-icons/md";
import { CareDiamond } from "./CareDiamond";

export default function DiamondBuyGuide() {
  return (
    <>
      <section>
        <div className="inner-diamond-img d-flex justify-content-center pb-3">
          <img src={diamondbuy} className="diamond-image" />
        </div>
        <div className="diamond-guide py-5">
          <div className="container m-auto text-center">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="py-3 diamond-heading">Diamond Buying Guide</h2>
                <p>
                  We know you’re here because you only want the best and we
                  would love to help you find the perfect diamond for you. We
                  also know that buying diamonds can be a little overwhelming,
                  but that doesn’t mean that you should ever settle or stress!
                  So just sit back with a cup of coffee and let us walk you
                  through everything you need to know before you buy that
                  sparking diamond!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* start diamond shop  */}
      <section className="diamond-shop-section py-5">
        <div className="container m-auto text-center">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="diamond-heading">Shop by Diamond Shapes</h4>
              <ul className="diamond-shop">
                <li>
                  <div className="diamond-shop-contant">
                    <a href="#">
                      <GiEmeraldNecklace />
                    </a>
                    <p>EMERALD</p>
                  </div>
                </li>
                <li>
                  <div className="diamond-shop-contant">
                    <a href="#">
                      <GiDropEarrings />
                    </a>
                    <p>PEAR</p>
                  </div>
                </li>
                <li>
                  <div className="diamond-shop-contant">
                    <a href="#">
                      <TbSquareRounded />
                    </a>
                    <p>ROUND</p>
                  </div>
                </li>
                <li>
                  <div className="diamond-shop-contant">
                    <a href="#">
                      <GiChainedHeart />
                    </a>
                    <p>HEART</p>
                  </div>
                </li>
                <li>
                  <div className="diamond-shop-contant">
                    <a href="#">
                      <GiHeartNecklace />
                    </a>
                    <p>PRINCESS</p>
                  </div>
                </li>
                <li>
                  <div className="diamond-shop-contant">
                    <a href="#">
                      <MdOutlineApproval />
                    </a>
                    <p>OVAL</p>
                  </div>
                </li>
                <li>
                  <div className="diamond-shop-contant">
                    <a href="#">
                      <GiEmerald />
                    </a>
                    <p>CUSHION</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* start diamond guide shape  */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="diamond-guide">
                <h4 className="diamond-heading">Shape</h4>
                <p>
                  Shape refers to the overall outline of the diamond when viewed
                  from the top and that determines the price as well. The most
                  expensive shape is the round diamond. That’s because they are
                  best at reflecting light and shine like there’s no tomorrow!
                  Although the choice of the shape mostly depends on your
                  personal style, a princess, cushion or heart cut is what we
                  would recommend if your diamond is bigger than 1 carat.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="diamond-guide">
                <h4 className="diamond-heading">Diamond Grading</h4>
                <ul>
                  <li>
                    Say Hello to Halo! It makes the centre stone look bigger and
                    works as a protective shield as well Go fancy with cushion
                    and emerald cuts.
                  </li>
                  <li>
                    They’re usually priced lower and make ‘em eyes pop, too!
                  </li>
                  <li>
                    Pick a diamond with an ‘excellent’ or ‘ideal’ cut and
                    nothing less than that Although the round is the most
                    expensive cut, it hides the imperfections and the yellowish
                    colour in the best way. It’s like a realllly good
                    concealer..
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <h4 className="diamond-heading text-center py-3">
                Certifications
              </h4>
              <p>
                The Certification is basically your diamond’s birth certificate.
                All our solitaire diamonds are meticulously analyzed and graded
                by the Gemological Institute of America (GIA), Hoge Raadvoor
                Diamant (HRD) & the IGI, the most trusted (and known) labs in
                the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* start cut diamond  */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="basics-diamond">
                <div className="diamond-info">
                  <h2>1. Cut</h2>
                  <p>
                    We believe the cut is the most important aspect of choosing
                    a diamond. It's basically what determines the proportion,
                    symmetry and polish of a diamond. The right cut will enhance
                    the sparke and the scintillation of the diamond. The better
                    the cut, the more likely your diamond is to sparkle bright
                    and look gorgeous!
                    <br />
                    <br />
                    <br />
                    <span className="text-drak" style={{ color: "#8863fb" }}>
                      Swiston Hint:
                    </span>
                    <br />
                    Invest in the cut. It’s the ultimate diamond hack (you’ll
                    not find it in the books). A beautifully cut diamond can
                    make the color and clarity appear better than they are.
                  </p>
                </div>
                <div className="diamond-cut"></div>
              </div>
              <div className="basics-diamond">
                <h2>2. Clarity</h2>
                <p>
                  When light passes through a diamond, it bounces back, making
                  the diamond sparkle! Some diamonds have imperfections in the
                  form of spots and blemishes. The more the imperfections, the
                  more difficult it is for light to pass through, thereby
                  reducing the sparkle. If you’re lost, here’s all you need to
                  remember: Lesser imperfection and inclusions = Better clarity
                  <br />
                  <br />
                  <br />
                  <span className="text-drak" style={{ color: "#8863fb" }}>
                    Swiston Hint:
                  </span>
                  <br />
                  If you’re buying a diamond that’s under a carat, don’t obsess
                  over the spots or blemishes because they aren’t really visible
                  to an untrained eye. It’s better to invest in the cut and
                  sparkle on!
                </p>
              </div>
              <div className="basics-diamond">
                <h2>3. Colour</h2>
                <p>
                  Ironically, the best color for a diamond would be ‘colorless’.
                  The colors range from D (colorless) and go all the way to Z
                  (light yellow). To be honest, the colour difference in
                  diamonds within a colour family is quite subtle to an
                  untrained eye. Nevertheless, they do create a difference in
                  the price and quality of the diamond. Bottom line is,
                  colorless diamonds are the most precious!
                  <br />
                  <br />
                  <br />
                  <span className="text-drak" style={{ color: "#8863fb" }}>
                    Swiston Hint:
                  </span>
                  <br />
                  If you’re buying a diamond that’s under a carat, don’t obsess
                  over the spots or blemishes because they aren’t really visible
                  to an untrained eye. It’s better to invest in the cut and
                  sparkle on!
                </p>
              </div>
              <div className="basics-diamond">
                <h2>4. Carat</h2>
                <p>
                  Ironically, the best color for a diamond would be ‘colorless’.
                  The colors range from D (colorless) and go all the way to Z
                  (light yellow). To be honest, the colour difference in
                  diamonds within a colour family is quite subtle to an
                  untrained eye. Nevertheless, they do create a difference in
                  the price and quality of the diamond. Bottom line is,
                  colorless diamonds are the most precious!
                  <br />
                  <br />
                  <br />
                  <span className="text-drak" style={{ color: "#8863fb" }}>
                    {" "}
                    Swiston Hint:
                  </span>
                  <br />
                  As diamond size increases, colour becomes more noticeable.
                  This is especially important to keep in mind if you are
                  purchasing a diamond of two carats or greater. If you pick a
                  slightly yellow colored diamond, you can pair it with a white
                  gold or platinum band. The white gold will complement the
                  yellow hue of your diamond, and they won’t clash with each
                  other!
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="css-dvvvhr emo7njy4">
                <div className="css-1vova02 emo7njy2">
                  <img src={anomatie} />
                  <div className="css-8ujz6y emo7njy0">
                    <div className="css-1kd6wsa emo7njy9"></div>
                    <div className="css-xsvfbs emo7njy1"></div>
                    <div
                      className="css-9z3dwl"
                      style={{ whiteSpace: "nowrap" }}>
                      Excellent
                    </div>
                  </div>
                  <div className="css-8ujz6y emo7njy0">
                    <div className="css-1kd6wsa emo7njy9"></div>
                    <div className="css-xsvfbs emo7njy1"></div>
                    <div
                      className="css-9z3dwl"
                      style={{ whiteSpace: "nowrap" }}>
                      Very Good
                    </div>
                  </div>
                  <div className="css-8ujz6y emo7njy0">
                    <div className="css-1kd6wsa emo7njy9"></div>
                    <div className="css-xsvfbs emo7njy1"></div>
                    <div
                      className="css-9z3dwl"
                      style={{ whiteSpace: "nowrap" }}>
                      Good
                    </div>
                  </div>
                  <div className="css-8ujz6y emo7njy0">
                    <div className="css-1kd6wsa emo7njy9"></div>
                    <div className="css-xsvfbs emo7njy1"></div>
                    <div
                      className="css-9z3dwl"
                      style={{ whiteSpace: "nowrap" }}>
                      Fair
                    </div>
                  </div>
                  <div className="css-8ujz6y emo7njy0">
                    <div className="css-1kd6wsa emo7njy9"></div>
                    <div className="css-xsvfbs emo7njy1"></div>
                    <div
                      className="css-9z3dwl"
                      style={{ whiteSpace: "nowrap" }}>
                      Poor
                    </div>
                  </div>
                </div>
                <div className="css-1em6721 emo7njy7">
                  <div className="css-gmkc8t emo7njy6"></div>
                  <span className="css-9z3dwl">Very Good</span>
                  <span className="css-in3yi3">Very Good</span>
                </div>
                <div className="css-1em6721 emo7njy7">
                  <div className="css-gmkc8t emo7njy6"></div>
                  <span className="css-9z3dwl">Very Good</span>
                  <span className="css-in3yi3">Very Good</span>
                </div>
                <div className="css-1em6721 emo7njy7">
                  <div className="css-gmkc8t emo7njy6"></div>
                  <span className="css-9z3dwl">Excellent</span>
                  <span className="css-in3yi3">Excellent</span>
                </div>
                <div className="css-1em6721 emo7njy7">
                  <div className="css-gmkc8t emo7njy6"></div>
                  <span className="css-9z3dwl">Fair</span>
                  <span className="css-in3yi3">Fair</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CareDiamond />
      </section>
    </>
  );
}
