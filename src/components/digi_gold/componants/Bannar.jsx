import React from 'react'
import './Bannar.css'
import { IoIosArrowDown } from "react-icons/io";

const Bannar = () => {
  return (
    <div className='bannar_image'>
        <div className='discription_details'>
            <h1 data-aos="fade-right">Here is an easier way of buying <br/> pure 24kt gold</h1>
            <p>Buy CaratLane DigiGld online to save money, grow <br/> your wealth, and convert your gold into beautiful <br/>jewellery—whenever you want it. Guaranteed, no-hassles buyback.</p>
            <div className=' btngap  '> <div><button className='btn1_1'>Buy Digital Gold</button></div> 
            <div ><button className='learnmore'>LEARN MORE <span> <IoIosArrowDown /> </span></button></div>
            </div>
        </div>
    </div>
  )
}

export default Bannar