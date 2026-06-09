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
  const [focusedInput, setFocusedInput] = useState("");

  // Kart Numarasini 4'lU Gruplara Boluyoruz: 1234567812345678 → 1234 5678 1234 5678
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 16)
    return cleaned.replace(/(.{4})/g, '$1 ').trim()
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="credit-card-visual">
          {/* ======================= Credit Card Back-End - CVC ======================= */}
          <div className="card-back-wrapper">
            <span className='cvc-number'>{cardCvcNumber || '000'}</span>
            <img src={MobileCreditCardBack} className='mobile-credit-card-back' alt="" />
            <img src={DesktopCreditCardBack} className='desktop-credit-card-back' alt="" />
          </div>
          {/* ======================= Credit Card Front-End - Card Holder Name, Card Number, Expiration Date ======================= */}
          <div className="card-front-wrapper">
            <span className="card-number-display">
              {formatCardNumber(cardNumber) || ''}
            </span>
            <span className="card-holder-name-display">
              {cardHolderName || ''}
            </span>
            <span className="card-expiration-data-display">
              {expirationDateMonth || ''}/{expirationDateYear || ''}
            </span>
            <img src={MobileCreditCardFront} className='mobile-credit-card-front' alt="" />
            <img src={DesktopCreditCardFront} className='desktop-credit-card-front' alt="" />
          </div>
          <img src={MobileBackground} className='mobile-background' alt="" />
          <img src={DesktopBackground} className='desktop-background' alt="" />
        </div>

        <div className="credit-card-informations">
          <div className="credit-card-name">
            <label>KART SAHİBİNİN ADI</label>
            <input
              type="text"
              value={cardHolderName}
              className={focusedInput === 'name' ? 'focused' : ''}
              onFocus={() => setFocusedInput('name')}
              onBlur={() => setFocusedInput('')}
              onChange={(e) => {
                const value = e.target.value;
                setCardHolderName(value)
              }}
            />
          </div>
          <div className="credit-card-number">
            <label>KART NUMARASI</label>
            <input
              type="text"
              value={formatCardNumber(cardNumber)}
              className={focusedInput === 'number' ? 'focused' : ''}
              onFocus={() => setFocusedInput('number')}
              onBlur={() => setFocusedInput('')}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 16);
                setCardNumber(value)
              }}
            />
          </div>
          <div className="credit-card-expiration-date">
            <div className="credit-card-expiration-date-and-cvc">
              <div className="expiration-date">
                <label >SKT (AY/YIL)</label>
                <div className="expiration-date-month-year">
                  <input
                    type="text"
                    maxLength={2}
                    value={expirationDateMonth}
                    className={focusedInput === 'month' ? 'focused' : ''}
                    onFocus={() => setFocusedInput('month')}
                    onBlur={() => setFocusedInput('')}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                      setExpirationDateMonth(value)
                    }}
                  />
                  <input
                    type="number"
                    maxLength={2}
                    value={expirationDateYear}
                    className={focusedInput === 'year' ? 'focused' : ''}
                    onFocus={() => setFocusedInput('year')}
                    onBlur={() => setFocusedInput('')}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                      setExpirationDateYear(value)
                    }}
                  />
                </div>
              </div>
              <div className="credit-card-cvc">
                <label>CVC</label>
                <input
                  type="number"
                  maxLength={3}
                  value={cardCvcNumber}
                  className={focusedInput === 'cvc' ? 'focused' : ''}
                  onFocus={() => setFocusedInput('cvc')}
                  onBlur={() => setFocusedInput('')}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
                    setCardCvcNumber(value)
                  }}
                />
              </div>
            </div>
          </div>
          <button>Onayla</button>
        </div>
      </div>
    </>
  )
}