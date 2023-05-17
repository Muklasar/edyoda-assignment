import './payment.css'
import background from '../../assets/images/Background.png'
import razapay from '../../assets/images/RazorpayIcon.png'
import { JobIcon } from '../../assets/icons/job'
import { clock } from '../../assets/icons/clock'
import { live } from '../../assets/icons/live'
import { scholar } from '../../assets/icons/scholar'
import { ads } from '../../assets/icons/ads'
import { offer } from '../../assets/icons/offer'
import { useEffect, useState } from 'react'

const Payment = () => {
    const [active, setActive] = useState(1)
    const [total, setTotal] = useState(179)

    useEffect(()=>{
        if(active===1){
            setTotal(179)
        }else if(active===2){
            setTotal(145)
        }else if(active===3){
            setTotal(99)
        }else{
            setTotal(0)
        }
    },[active])
    return (
        <div className="payment-wrapper">
            <img src={background} style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <div className='row m-0 payment-row '>
                <div className='col-lg-5 col-12 payment-left'>
                    <div className='payment-left-upper'>
                        Access curated courses worth ₹<span className='price-decoration'> 18,500</span> at just <span className='price99'>₹ 99</span> per year!
                    </div>
                    <div className='payment-left-bottom'>
                        <ul className='payment-left-bottom-ul'>
                            <li>
                                <p>{JobIcon}</p>
                                <p><span style={{ color: "rgba(0, 150, 255, 1)", margin: 0 }}>100+</span> Job relevant courses</p>
                            </li>
                            <li>
                                <p>{clock}</p>
                                <p><span style={{ color: "rgba(0, 150, 255, 1)", margin: 0 }}>20,000+</span> Hours of content</p>
                            </li>
                            <li>
                                <p>{live}</p>
                                <p><span style={{ color: "rgba(0, 150, 255, 1)", margin: 0 }}>Exclusive</span> webinar access</p>
                            </li>
                            <li>
                                <p>{scholar}</p>
                                <p>Scholarship worth<span style={{ color: "rgba(0, 150, 255, 1)", marginLeft: "10px" }}>₹94,500</span></p>
                            </li>
                            <li>
                                <p>{ads}</p>
                                <p><span style={{ color: "rgba(0, 150, 255, 1)", margin: 0 }}>Ad Free</span> learning experience</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='col-1'></div>
                <div className='col-lg-5 col-12 payment-right ps-3'>
                    <div className='payment-card'>
                        <div className='row m-0 payment-card-header'>
                            <div className='col-3 payment-card-header-circle-div'>
                                <div className='payment-card-header-circle'>1</div>
                                <div className='payment-card-header-circle-text'>Sign Up</div>
                            </div>
                            <div className='col-4 payment-card-header-circle-div'>
                                <div className='payment-card-header-circle'>2</div>
                                <div className='payment-card-header-circle-text'>Subscribe</div>
                            </div>
                        </div>
                        <div className='subscription-descriptions'>
                            Select your subcription plan
                        </div>
                        <div className='subscription-wrapper'>
                            <div className="subscription-card subscription-card-disable">
                                <div className='subscription-budge subscription-budge-disable'>Offer expired</div>
                                <div className='subscription-content'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        {/* <input type='checkbox'/> */}
                                        {/* <div class="container"> */}
                                        <div class="round round-disable">
                                            <input type="checkbox" checked/>
                                            <label for="checkbox1"></label>
                                        </div>
                                        {/* </div> */}



                                        <div className='subscription-text1 subscription-text1-disable'>
                                            12 Months Subscriptions
                                        </div>
                                    </div>
                                    <div className='subscription-total'>
                                        <div class="total-amount total-amount-disable">
                                            <span class="text total-amount-disable">Total</span>
                                            <span class="amount total-amount-disable">₹99</span>
                                        </div>
                                        <div class="month-amount total-amount-disable">
                                            <span class="">₹8</span>
                                            <span class="text">/mo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={active === 1 ? "subscription-card subscription-card-active mt-3" : "subscription-card mt-3"} onClick={() => setActive(1)}>
                                <div className='subscription-budge subscription-budge-active'>Recommended</div>
                                <div className='subscription-content'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        {/* <input type='checkbox'/> */}
                                        {/* <div class="container"> */}
                                        <div className={active === 1 ? "round round-active" : 'round'}>
                                            <input type="checkbox" id="checkbox2" checked={active === 1 ? true : false} />
                                            <label for="checkbox2"></label>
                                        </div>
                                        {/* </div> */}



                                        <div className='subscription-text1'>
                                            12 Months Subscriptions
                                        </div>
                                    </div>
                                    <div className='subscription-total'>
                                        <div class="total-amount">
                                            <span class="text">Total</span>
                                            <span class="amount">₹179</span>
                                        </div>
                                        <div class="month-amount">
                                            <span class="amount">₹15</span>
                                            <span class="text">/mo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={active === 2 ? "subscription-card subscription-card-active mt-3" : "subscription-card mt-3"} onClick={() => setActive(2)}>
                                <div className='subscription-content'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        {/* <input type='checkbox'/> */}
                                        {/* <div class="container"> */}
                                        <div class="round">
                                            <input type="checkbox" id="checkbox3" checked={active === 2 ? true : false} />
                                            <label for="checkbox3"></label>
                                        </div>
                                        {/* </div> */}



                                        <div className='subscription-text1'>
                                            6 Months Subscriptions
                                        </div>
                                    </div>
                                    <div className='subscription-total'>
                                        <div class="total-amount">
                                            <span class="text">Total</span>
                                            <span class="amount">₹145</span>
                                        </div>
                                        <div class="month-amount">
                                            <span class="amount">₹25</span>
                                            <span class="text">/mo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={active === 3 ? "subscription-card subscription-card-active mt-3" : "subscription-card mt-3"} onClick={() => setActive(3)}>
                                <div className='subscription-content'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        {/* <input type='checkbox'/> */}
                                        {/* <div class="container"> */}
                                        <div class="round">
                                            <input type="checkbox" id="checkbox4" checked={active === 3 ? true : false} />
                                            <label for="checkbox4"></label>
                                        </div>
                                        {/* </div> */}
                                        <div className='subscription-text1'>
                                            3 Months Subscriptions
                                        </div>
                                    </div>
                                    <div className='subscription-total'>
                                        <div class="total-amount">
                                            <span class="text">Total</span>
                                            <span class="amount">₹99</span>
                                        </div>
                                        <div class="month-amount">
                                            <span class="amount">₹33</span>
                                            <span class="text">/mo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='subscription-fee'>
                            <p className=''>Subscription Fee</p>
                            <p className=''>₹18,500</p>
                        </div>
                        <div className='total'>
                            <p className=''><span className='total-text'>Total</span>(Incl. of 18% GST)</p>
                            <p className='total-amount'>₹{total}</p>
                        </div>
                        <div className='offer'>
                            <div className='offer-sub'>
                                <p className=''>Limited time offer</p>
                                <p className=''>- ₹18,401</p>
                            </div>
                            <p className='offer-date'>
                                <span className='offer-icon'>{offer}</span> Offer valid till 25th March 2023
                            </p>
                        </div>
                        <div className='button-section'>
                            <div className='cancel-button'>CANCEL</div>
                            <div className='process-button'>PROCEED TO PAY</div>
                        </div>
                        <div className='razarpay mt-4'>
                            <img src={razapay} width="120px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment