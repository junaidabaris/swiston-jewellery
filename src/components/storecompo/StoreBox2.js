import Accordion from 'react-bootstrap/Accordion';
export const StoreBox2 = () => {
    return <div className="boxstore-2">
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Is there any difference in the prices online and in store?</Accordion.Header>
                <Accordion.Body>
                    Our prices and offers are consistent across the website, app, and stores. So, you get the best deal every time you shop, online or offline.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How will I know if the designs I like are available in a store near me?</Accordion.Header>
                <Accordion.Body>
                    You can simply click on the ‘Find In Store’ button on the product page and view the list of stores in your city that currently have the design available. You can also request for the design to be tried at a store near you by clicking on the ‘Request Design’ button.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Can I exchange my gold jewellery at any store?</Accordion.Header>
                <Accordion.Body>
                    Yes, you can walk into any store and get your gold jewellery exchanged for a trendy new design.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Is jewellery made of real gold and diamonds?</Accordion.Header>
                <Accordion.Body>
                    Yes, all jewellery is crafted with real diamonds in 14kt and 18kt gold. On completing your purchase you will receive a certificate of authenticity along with the invoice.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
}