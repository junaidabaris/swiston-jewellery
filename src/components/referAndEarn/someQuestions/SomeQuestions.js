import React from "react";
import "./someQuestion.css";
import { IoMdCall } from "react-icons/io";

import QuestionAccordian from "./questionAccordian/QuestionAccordian";
function SomeQuestions() {
  return (
    <>
      <div className="question_section">
        <div className=" ">
          <div className="question_content_flex">
            <div className="question_content">
              <h3 className="question_heading">Have Some Questions?</h3>
              <div className="call_box1">
                <div>
                  <span className="call_icons">
                    <IoMdCall />
                  </span>
                </div>
                <div className="call_content">
                  <p>Just give us a call at</p>
                  <span className="call_number">+91-44-66075200</span>
                </div>
              </div>
            </div>
            <div className="question_accordian_content">
              <QuestionAccordian
                eventKey={0}
                header={"What is Refer & Earn?"}
                body={
                  "Refer & Earn lets you earn rewards by inspiring your friends and family to be as stylish as you. You can find this new feature in the 'My Account' section."
                }
              />
              <QuestionAccordian
                eventKey={1}
                header={"How does the program work?"}
                body={
                  "It's really simple! Just go to the 'My Account' section and click on the 'Refer and Earn' feature. Enter your details to generate a unique link, which you can share with your friends and family! After they sign-up, you will receive Rs. 250 in xCLusive points. Once they make their first purchase, you will receive an additional Rs.500 in xCLusive points!."
                }
              />
              <QuestionAccordian
                eventKey={2}
                header={"How can I join the program?"}
              />
              <QuestionAccordian
                eventKey={3}
                header={"What rewards can I earn?"}
              />
              <QuestionAccordian
                eventKey={4}
                header={"Who can I refer?"}
                body={
                  "Refer & Earn lets you earn rewards by inspiring your friends and family to be as stylish as you. You can find this new feature in the 'My Account' section."
                }
              />
              <QuestionAccordian eventKey={4} header={"Who can I refer?"} />
              <QuestionAccordian eventKey={4} header={"Who can I refer?"} />
              <QuestionAccordian eventKey={4} header={"Who can I refer?"} />
              <QuestionAccordian eventKey={4} header={"Who can I refer?"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SomeQuestions;
