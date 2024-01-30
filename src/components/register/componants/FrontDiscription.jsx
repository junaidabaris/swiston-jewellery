import React from 'react'
import './FrontDiscription.css'
import { MdFingerprint } from "react-icons/md";
import googleImage from './assets/google_img.png'
import facebookImage from './assets/facebook_img.jfif'
import Fingerprint from './assets/figerprint.gif'
import fingerBg from './assets/download.png';

const FrontDiscription = () => {
  return (
    <div className='frontDiscrption'>
        <div className='d-flex justify-content-center' >
        <div className='fingerPrint_showcase' ><img src={Fingerprint} alt="fingerprint" /></div>
        </div>
        <div className='Signup_text'><strong>Signup with Swiston</strong></div>
        <p className='ptext'>Unlock Best prices and become an insider for our exclusive launches & offers. Complete your profile and get ₹250 worth of xCLusive Points.</p>
        <div className='d-flex justify-content-center gap-4 icon_place'>
            <button><img src={googleImage} alt="googlepicture" className='icon_placeholder' /></button>
            <button className='icon_placeholder'><img src={facebookImage}alt='' className='img_size' /></button>
        </div>
        <div className='seprator_line'>
         <span >Or continue with</span>
        </div> 
    </div>
    
  )
}

export default FrontDiscription