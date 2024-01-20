import React from 'react'
import { Link } from 'react-router-dom'
import { MdCancel } from "react-icons/md";


const Card_profile = () => {
  return (
    <div className='card_profile mt-4'>
   
       <div className='img_profile'>
        <img src="https://cdn.caratlane.com/media/catalog/product/J/E/JE07601-1YP6P0_1_lar.jpg" alt="pictutre" />
       </div>
      <div className='discription_profile'>
          <h4 className='card_headline'>Madesha Drop Earrings</h4>
          <div>
            <span className='price'>₹1,23,523</span>
            <span className='price_discount'>₹1,39,928</span>
            <span className='price_save'>Save ₹16,405</span>
          </div>
         <p className='dicsount_cord'>JE07601-1YP6P0</p>
         <p>Quentity <span> 1</span> </p>
         <div><Link className='link-cart'>Check Delivery Date</Link></div>
      </div>
      <div className='notification_profile'>
        <div className='notification'><span>Only 1 left</span></div>
        <div className='cancel_cart'><span><MdCancel  fontSize={'25px'} /></span></div>
      </div>
       </div>
   
  )
}

export default Card_profile