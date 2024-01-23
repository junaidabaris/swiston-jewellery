import React from "react";
import "../../Components/OurTeam/OurTeam.css";
import ourtem1 from "../../images/OurTeamImages/mithun.png";
import ourtem2 from "../../images/OurTeamImages/guru.png";
import ourtem3 from "../../images/OurTeamImages/avnish.png";
import ring1 from "../../images/OurTeamImages/1.jpg";
import ourtem4 from "../../images/OurTeamImages/atul.png";
import innerring1 from "../../images/OurTeamImages/1.jpg";
import innerring2 from "../../images/OurTeamImages/2.jpg";
import innerring3 from "../../images/OurTeamImages/3.jpg";
import drowing from "../../images/OurTeamImages/drawing.png";
export default function OurTeam() {
  return (
    <>
      <section className="py-5">
        <div className="text-center our-contant">
          <h4>Our Team</h4>
          <div></div>
          <p>
            Our roots are digital, our passion is contagious and most
            importantly, our people are creative, inspiring, and dedicated!
          </p>
        </div>

        <div className="about-ourtem py-5">
          <div className="ourtem">
            <img src={ourtem1} className="our-image" />
            <div className="text-center py-3">
              <h4>Mithun Sacheti</h4>
              <p>Founder and MD</p>
            </div>
          </div>
          <div className="ourtem">
            <img src={ourtem2} className="our-image" />
            <div className="text-center py-3">
              <h4>Gurukeerthi</h4>
              <p>Co-Founder and SVP Technology</p>
            </div>
          </div>
          <div className="ourtem">
            <img src={ourtem3} className="our-image" />
            <div className="text-center py-3">
              <h4>Avnish Anand</h4>
              <p>Chief Operating Officer</p>
            </div>
          </div>
          <div className="ourtem">
            <img src={ourtem4} className="our-image" />
            <div className="text-center py-3">
              <h4>Atul Sinha </h4>
              <p>SVP Retail</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-5"
        style={{ backgroundColor: "rgb(246, 246, 246)" }}
      >
        <div className="container m-auto  text-center ">
          <h4 className="py-4">CaratLane Advantage</h4>
          <p style={{ color: "rgb(135, 118, 157)" }}>
            When you shop at CaratLane, you can always be assured of the highest
            quality standards. Every piece of jewellery is meticulously crafted
            with the utmost care. It goes through a thorough quality check and
            is then taken through certification.
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="conatiner">
          <div className="row">
            <div className="col-6">
              <img src={drowing} className="w-100"/>
            </div>
            <div className="col-6">
              <h4>Making Process</h4>
              <p>
                Our designs always come with a unique CaratLane touch through
                innovative designs or techniques, or both. Uncover our
                jewellery-making process, from the inspiration to the final
                outcome.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="multiple-images">
          <div className="row">
            <div className="col-4">
              <img src={ring1} className="w-100" />
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-4">
                  <img src={innerring1} className="w-100" />
                </div>
                <div className="col-4">
                  <img src={innerring2} className="w-100" />
                </div>
                <div className="col-4">
                  <img src={innerring3} className="w-100" />
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <img src={innerring1} className="w-100" />
                </div>
                <div className="col-4">
                  <img src={innerring2} className="w-100" />
                </div>
                <div className="col-4">
                  <img src={innerring3} className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
