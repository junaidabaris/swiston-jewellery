import React from 'react'
import { FaTruckArrowRight } from "react-icons/fa6";
import "../../Components/Services/Service.css"
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineSettingsAccessibility } from "react-icons/md";
import { HiMiniCurrencyRupee } from "react-icons/hi2";

export default function Service() {
  return (
    <>
         <section style={{backgroundColor:"#4f3267"}} className='py-5'>
                  <div className='container'>
                       <div className='row'>
                            <div className='col-6 pb-5'>
                                    <div className='d-flex trevel-service'>
                            
                                               <i className='serfb-icon'> <FaTruckArrowRight/></i>
                                          
                                          <div className='service-text'>
                                               <h6>100% Certified & Free Shipping</h6>
                                               <p>
                                               Our jewellery always comes<br/>
                                                with a certificate of authentication.
                                               </p>
                                          </div>
                                    </div>
                            </div>
                            <div className='col-6 pb-5'>
                                    <div className='d-flex trevel-service'>
                            
                                               <i className='serfb-icon'> <GiPayMoney/></i>
                                          
                                          <div className='service-text'>
                                               <h6>15 Day Money-Back</h6>
                                               <p>
                                               Get 100% refund if you don't like <br/>your jewellery.
                                               </p>
                                          </div>
                                    </div>
                            </div>
                            <div className='col-6'>
                                    <div className='d-flex trevel-service'>
                            
                                               <i className='serfb-icon'> <MdOutlineSettingsAccessibility/></i>
                                          
                                          <div className='service-text'>
                                               <h6>Lifetime Exchange</h6>
                                               <p>
                                               Exchange your old designs anytime<br/> you want an upgrade.
                                               </p>
                                          </div>
                                    </div>
                            </div>
                            <div className='col-6'>
                                    <div className='d-flex trevel-service'>
                            
                                               <i className='serfb-icon'> <HiMiniCurrencyRupee/></i>
                                          
                                          <div className='service-text'>
                                               <h6>One Year Replacement Warranty</h6>
                                               <p>
                                               If your jewellery has a defect, we<br/> will fix it.
                                               </p>
                                          </div>
                                    </div>
                            </div>
                       </div>
                  </div>
         </section>
    </>
  )
}
