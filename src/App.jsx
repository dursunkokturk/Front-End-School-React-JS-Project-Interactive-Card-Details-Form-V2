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

  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDateMonth, setExpirationDateMonth] = useState("");
  const [expirationDateYear, setExpirationDateYear] = useState("");
  const [cardCvcNumber, setCardCvcNumber] = useState("");

  return (
    <>
      <div className="page-wrapper">
        <div className="credit-card-visual">
          <div className="card-number-span-and-img">
            <span className='mobile-card-number'>{cardNumber}</span>
            <img src={MobileCreditCardBack} className='mobile-credit-card-back' alt="" />
          </div>
          <img src={DesktopCreditCardBack} className='desktop-credit-card-back' alt="" />
          <div className="card-holder-name-span-and-img">
            <span className='mobile-card-holder-name'>{cardHolderName}</span>
            <img src={MobileCreditCardFront} className='mobile-credit-card-front' alt="" />
          </div>
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
              onChange={(e) => {
                const value = e.target.value;
                setCardHolderName(value)
              }}
            />
          </div>
          <div className="credit-card-number">
            <label>KART NUMARASI</label>
            <input
              type="number"
              value={cardNumber}
              onChange={(e) => {
                const value = e.target.value;
                setCardNumber(value)
              }}
            />
          </div>
          <div className="credit-card-expiration-date">
            <div className="expiration-date-and-cvc">
              <div className="expiration-date">
                <label>SKT (AY/YIL)</label>
                <div className="expiration-date-month-year">
                  <input
                    type="number"
                    value={expirationDateMonth}
                    onChange={(e) => {
                      const value = e.target.value;
                      setExpirationDateMonth(value)
                    }}
                  />
                  <input
                    type="number"
                    value={expirationDateYear}
                    onChange={(e) => {
                      const value = e.target.value;
                      setExpirationDateYear(value)
                    }}
                  />
                </div>
              </div>
              <div className="credit-card-cvc">
                <label>CVC</label>
                <input
                  type="number"
                  value={cardCvcNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCardCvcNumber(value)
                  }}
                />
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