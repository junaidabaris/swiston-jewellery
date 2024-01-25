import Accordion from "react-bootstrap/Accordion";

function AccorodionCompo({ heading, description, id }) {
  return (
    <Accordion defaultActiveKey='1'>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>{heading}</Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccorodionCompo;
