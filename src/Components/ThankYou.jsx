import ThankYouOval from '../assets/img/thankyou-oval.png'
import ThankYouClick from '../assets/img/thankyou-click.png'
import '../App.css'

export default function ThankYou({resetForm}) {

  

  return (
    <>
      <div className="thankyou">
        <div className="thankyou-click-and-thankyou-oval">
          <img src={ThankYouClick} className='thankyou-click' alt="" />
          <img src={ThankYouOval} className='thankyou-oval' alt="" />
        </div>
        <h2>TEŞEKKÜRLER</h2>
        <h3>Kart bilgilerinizi ekledik</h3>
        <button 
          onClick={resetForm}
          className='thankyou-form-continue-button'
        >Devam et</button>
      </div>
    </>
  )
}