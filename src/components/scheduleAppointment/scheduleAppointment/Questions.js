import React from "react";
import "./Questions.css"
import Accordion from "react-bootstrap/Accordion";
import { SlPhone } from "react-icons/sl";

export default function Questions() {
  return (
    < section className="question-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="question-title">Have Some Questions?</h3>
            <div className="some-question">
              <span className="phone-icon">
                <SlPhone/>
              </span>
              <div className="question-contant">
                <h6>Just give us a call at</h6>
                <span className="phone-number">199155555</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Accordion defaultActiveKey="0" className="border-0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="border-0">What is Try at Home?</Accordion.Header>
                <Accordion.Body className="border-0">
                  Try at Home is a service that you can avail to try our designs
                  in the comfort of your home. It is a free service, with
                  absolutely no obligation to buy. All you have to do is pick
                  your favourite designs, and schedule an appointment as per
                  your convenience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Is Try at Home available outside India?</Accordion.Header>
                <Accordion.Body>
                No, Try at Home is available only within India.

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
