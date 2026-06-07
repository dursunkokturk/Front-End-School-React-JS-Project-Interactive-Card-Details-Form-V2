import MobileCreditCardBack from './assets/img/mobile-credit-card-back.png'
import DesktopCreditCardBack from './assets/img/desktop-credit-card-back.png'
import MobileCreditCardFront from './assets/img/mobile-credit-card-front.png'
import DesktopCreditCardFront from './assets/img/desktop-credit-card-front.png'
import MobileBackground from './assets/img/mobile-background.png'
import DesktopBackground from './assets/img/desktop-background.png'
import './App.css'
import ThankYou from './Components/ThankYou'
import { useState } from 'react'

export default function App() {

  const [cardHolderName,setCardHolderName]=useState("");

  return (
    <>
      <div className="page-wrapper">
        <div className="credit-card-visual">
          <img src={MobileCreditCardBack} className='mobile-credit-card-back' alt="" />
          <img src={DesktopCreditCardBack} className='desktop-credit-card-back' alt="" />
          <img src={MobileCreditCardFront} className='mobile-credit-card-front' alt="" />
          <img src={DesktopCreditCardFront} className='desktop-credit-card-front' alt="" />
          <img src={MobileBackground} className='mobile-background' alt="" />
          <img src={DesktopBackground} className='desktop-background' alt="" />
        </div>
        <div className="credit-card-informations">
          <div className="credit-card-name">
            <label>KART SAHİBİNİN ADI</label>
            <input 
              type="text" 
              value={cardHolderName}
              onChange={(e)=>{
                const value = e.target.value;
                setCardHolderName(value)
              }}
              />
          </div>
          <div className="credit-card-number">
            <label>KART NUMARASI</label>
            <input type="number" />
          </div>
          <div className="credit-card-expiration-date">
            <div className="expiration-date-and-cvc">
              <div className="expiration-date">
                <label>SKT (AY/YIL)</label>
                <div className="expiration-date-month-year">
                  <input type="number" />
                  <input type="number" />
                </div>
              </div>
              <div className="credit-card-cvc">
                <label>CVC</label>
                <input type="number" />
              </div>
            </div>
          </div>
          <button>Onayla</button>
          <ThankYou />
        </div>
      </div>
    </>
  )
}