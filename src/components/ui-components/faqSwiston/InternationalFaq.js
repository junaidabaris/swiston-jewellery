import React from "react";
import Accordion from "react-bootstrap/Accordion";
export default function InternationalFaq() {
  const accordionData = [
    {
      id: 1,
      isAccordiation: false,
      name: "Q.Do you ship outside India?",
      discription:
        "Yes, we do! We ship to: US, UK, Canada, Australia, Dubai and Singapore. We are adding more countries everyday. Please contact us to know if we can ship to your country.",
    },
    {
      id: 2,
      isAccordiation: false,
      name: "Q.How much is the shipping charge?",
      discription:
        "It varies from country to country. Please add your favourite jewellery to the cart page to see applicable shipping charges PS: Subscribe to our newsletter to stay updated on special shipping promotions we might run :)",
    },
    {
      id: 3,
      isAccordiation: false,
      name: "Q.I live outside India but I want to have the order delivered in India. Is it possible?",
      discription:
        "Yes it is possible to do that! Just change your shipping country to India and pay in Indian Rupees via any convenient payment option and get your order delivered to your loved ones in India. If you’re facing any issues, please write to us at internationalsales@swiston.com)",
    },
    {
      id: 4,
      isAccordiation: false,
      name: "Q.Is my international order covered by insurance?",
      discription:
        "Yes, all our shipping is insured and shipped via reputed courier partners like FedEx, DHL, UPS!)",
    },
    {
      id: 5,
      isAccordiation: false,
      name: "Q.Do I have to pay any additional custom duty charges for my order?",
      discription:
        " No, the custom duties are included in the product price. You will not have to pay anything at the time of receiving your order.",
    },
    {
      id: 6,
      isAccordiation: false,
      name: "Q.Can I redeem the gift card for international orders?",
      discription:
        " Unfortunately, we can’t redeem the gift card for international orders as of now. All CaratLane gift cards can be purchased and redeemed against Indian delivery orders.",
    },
    {
      id: 7,
      isAccordiation: false,
      name: "Q.Why is the price of the product in my local currency higher than the price in Indian Rupees?",
      discription:
        "The price in dollars includes applicable duties, taxes and forex transaction charges that we incur when we ship to your country from India. ",
    },
    {
      id: 8,
      isAccordiation: false,
      name: "Q. How can I return/exchange an item shipped internationally?",
      discription:
        " We are currently not accepting returns or exchanges on international orders. ",
    },
    {
      id: 9,
      isAccordiation: false,
      name: "Q. Can I cancel my order after it has been shipped?",
      discription:
        " Unfortunately, once an order has been shipped out of India we can't cancel your order. For any queries please contact us on internationalsales@swiston.com ",
    },
    {
      id: 10,
      isAccordiation: false,
      name: "Q. Can I place an order through the Swiston app? If yes, how do I proceed?",
      discription:
        "Yes, you can! Once you’re on the swiston app, please change the flag on the top right corner to the country of your choice.",
    },
    {
      id: 11,
      isAccordiation: false,
      name: "Q.  Can I change my order delivery address after placing the order?",
      discription:
        "Yes, you can. Just drop us an email to internationalsales@swiston.com and we will take care of the same :) (P.S: Provided we haven’t shipped it out already) ",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {accordionData.map((items) => {
              const { id, name, title, discription } = items;
              return (
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>{name}</Accordion.Header>
                    <Accordion.Body>{discription}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
