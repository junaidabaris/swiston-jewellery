import React from "react";
import Accordion from "react-bootstrap/Accordion";
function QuestionAccordian({ eventKey, header, body }) {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Header>
            <h6 className="accordion_heading">{header}</h6>
          </Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default QuestionAccordian;
