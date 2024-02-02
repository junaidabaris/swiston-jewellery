import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const MoneyExchanges= [
    {
        id: "0", title: "Money-Back, Buyback & Exchanges:",
        subTitle: ["Customised Jewellery (including personalised/ engraved products) is not eligible for a 15 Day Money-Back or a 15 Day Exchange. Lifetime Exchange and Buyback are applicable.",
            "Once your returned item is received, our Quality Assurance Department will review it.",
            "Any item that shows sign of wear or has been altered, resized (by a jeweller other than the company) or damaged cannot be accepted for 15 Day Money-Back.",
            "The product should be accompanied by the original product certificate and the original/ copy of the invoice for all exchange within the 15 Day Money-Back period.",
            "In case the customer cannot produce the original certificate, the company will send the solitaire/ jewellery to the lab for recertification, the shipping and certification cost of which shall be borne by the customer.",
            "The Money-Back amount will be 100% of the actual amount paid. In case, any coupon, discount or promo codes were used during the original purchase, the exchange amount will be reduced by an amount equivalent to the coupon, discount or promo codes, as applicable.",
            "In case, any coupon, discount or promo codes were used during the original purchase, the BuyBack / Exchange amount will be reduced by an amount equivalent to the coupon, discount or promo codes, as applicable.",
            "If the discount was on MRP, then the discount will be deducted on the actual making charges of the design while arriving at the final LTE value.",
            "The prevailing market value will be determined by the company."
        ], open: false
    },
    {
        id: "1", title: "Resizing & Repairs:", subTitle: [
            "if you want to resize your ring, the company will resize it free of cost except in certain cases where the resizing is not possible.",
            "If the resized ring costs more than the existing ring, the incremental cost shall be borne by the customer.",
            "If the resized ring costs less than the existing ring, the differential amount shall be refunded to the customer.",
            "In case of a refund, the payment of the same shall be made by way of an online bank transfer within 10 days of dispatch of the resized product.",
            "If for some reasons, your product needs to be repaired, the company shall repair / replace the product for charges which would be determined by the company on a case to case basis.",
            "Shipping charges under Repairs & Resizing policy shall be borne by the customer.",
            "This feature is not available for international orders (orders that will be shipped abroad from India).."
        ], open: false
    },
    {
        id: "2", title: "1 Year Replacement Warranty", subTitle: [
            "f you face any quality issues with your jewellery, we will replace it- No questions asked*!  *Valid only on orders below 2L."
        ], open: false
    }
]

export default function MoneyExchange() {
    const [list, setlist] = useState(MoneyExchanges)
    const openIndex = (id) => {
        const clone = [...list]
        const run = clone.map((item) => {
            if (item.id == id) {
                return { ...item, open: !item.open }
            } else {
                return item
            }
        })
        setlist(run)
    }
    return (
        <div className="main_box">
            <div className="moneyexchange">
                <ul className="term-condition-list">
                    {list?.map((index) => {
                        return (
                            <li key={index}
                                onClick={() => { openIndex(index.id) }}
                            >

                                <div className="header_title">{index.title} <span className="down-icon">{index.open === true ? <FaAngleUp /> : <FaAngleDown />}</span></div>
                                <div>
                                    {index.open && <ul className="note_list">
                                        {index.subTitle?.map((i) => {
                                            return (
                                                <li>{i}</li>
                                            )
                                        })}
                                    </ul>
                                    }

                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}