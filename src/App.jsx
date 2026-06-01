import CreditCardBack from './assets/img/credit-card-back.png'
import CreditCardFront from './assets/img/credit-card-front.png'
import MobileBackground from './assets/img/mobile-background.png'
import './App.css'

export default function App() {

  return (
    <>
      <div className="credit-card-visual">
        <img src={CreditCardBack} className='credit-card-back' alt="" />
        <img src={CreditCardFront} className='credit-card-front' alt="" />
        <img src={MobileBackground} className='mobile-background' alt="" />
      </div>
      <div className="credit-card-informations">
        <div className="credit-card-name">
          <label>KART SAHİBİNİN ADI</label>
          <input type="text" />
        </div>
        <div className="credit-card-name">
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
      </div>
    </>
  )
}