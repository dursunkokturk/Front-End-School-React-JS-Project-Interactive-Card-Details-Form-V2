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
    </>
  )
}