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
  const [errors, setErrors] = useState({
    cardHolderName: "",
    cardNumber: "",
    expirationDateMonth: "",
    expirationDateYear: "",
    cardCvcNumber: ""
  })

  // Ay Dolunca Otomatik Yil input'una Gec
  const yearInputRef = useRef(null)

  // Kart Numarasini 4'lU Gruplara Boluyoruz: 1234567812345678 → 1234 5678 1234 5678
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 16)
    return cleaned.replace(/(.{4})/g, '$1 ').trim()
  }

  // Sadece Rakam Tuslari ve 
  // Backspace, Delete, Tab, Arrow Gibi Kontrol Tuslari Serbest
  const allowOnlyNumbers = (e) => {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
    const isNumber = /^[0-9]$/.test(e.key)
    const isCtrl = e.ctrlKey || e.metaKey  // Ctrl+C, Ctrl+V gibi

    if (!isNumber && !allowedKeys.includes(e.key) && !isCtrl) {
      e.preventDefault()
    }
  }

  const validate = () => {
    const newErrors = {
      cardHolderName: "",
      cardNumber: "",
      expirationDateMonth: "",
      expirationDateYear: "",
      cardCvcNumber: ""
    }

    let isValid = true;

    if (!cardHolderName.trim()) {
      newErrors.cardHolderName = "İsim Alanı Boş Bırakılamaz";
      isValid = false;
    }

    if (!cardNumber.trim()) {
      newErrors.cardNumber = "Kredi Kartı Numarası Alanı Boş Bırakılamaz";
      isValid = false;
    } else if (cardNumber.length < 16) {
      newErrors.cardNumber = "Kartı Numarası 16 Haneli Olmalıdır";
      isValid = false;
    }

    if (!expirationDateMonth.trim()) {
      newErrors.expirationDateMonth = "Ay Alanı Boş Bırakılamaz";
      isValid = false;
    } else if (Number(expirationDateMonth) < 1 || Number(expirationDateMonth) > 12) {
      newErrors.expirationDateMonth = "Geçersiz Ay (1-12)";
      isValid = false;
    }

    // Yil Kontrolu
    const currentYear = new Date().getFullYear() % 100  // 2025 → 25
    const currentMonth = new Date().getMonth() + 1       // 0-11 → 1-12
    const enteredYear = Number(expirationDateYear)
    const enteredMonth = Number(expirationDateMonth)

    if (!expirationDateYear.trim()) {
      newErrors.expirationDateYear = "Yıl Alanı Boş Bırakılamaz";
      isValid = false;
    } else if (expirationDateYear.length < 2) {
      newErrors.expirationDateYear = "Yıl 2 Haneli Olmalıdır";
      isValid = false;
    } else if (enteredYear < currentMonth) {
      newErrors.expirationDateYear = "Kart Kullanım Süresi Dolmuş";
      isValid = false;
    } else if (enteredYear === currentMonth && enteredMonth < currentMonth) {
      // Ayni Yil Icinde Ay Gecmis Ise
      newErrors.expirationDateYear = "Kart Kullanım Süresi Dolmuş";
      isValid = false;
    }

    if (!cardCvcNumber.trim()) {
      newErrors.cardCvcNumber = "CVC Alanı Boş Bırakılamaz";
      isValid = false;
    } else if (cardCvcNumber.length < 3) {
      newErrors.cardCvcNumber = "CVC Alani 3 Haneli Olmalıdır";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form Geçerli Devam Ediliyor");
    }
  }

  const clearError = (field) => {
    setErrors(prev => ({ ...prev, [field]: "" }))
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
              className={[
                focusedInput === 'name' ? 'focused' : '',
                errors.cardHolderName ? 'input-error' : ''
              ].join(' ')}
              onFocus={() => setFocusedInput('name')}
              onBlur={() => setFocusedInput('')}
              onChange={(e) => {
                const value = e.target.value;
                setCardHolderName(value)
                clearError('cardHolderName')
              }}
            />
            {errors.cardHolderName && (
              <span className="error-message">{errors.cardHolderName}</span>
            )}
          </div>
          <div className="credit-card-number">
            <label>KART NUMARASI</label>
            <input
              type="text"

              // Mobilde Sayisal Klavye
              inputMode='numeric'

              value={formatCardNumber(cardNumber)}
              className={[
                focusedInput === 'number' ? 'focused' : '',
                errors.cardNumber ? 'input-error' : ''
              ].join(' ')}
              onFocus={() => setFocusedInput('number')}
              onBlur={() => setFocusedInput('')}

              // Harf Tusunu Engelliyoruz
              onKeyDown={allowOnlyNumbers}

              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 16);
                setCardNumber(value)
                clearError('cardNumber')
              }}
            />
            {errors.cardNumber && (
              <span className="error-message">{errors.cardNumber}</span>
            )}
          </div>
          <div className="credit-card-expiration-date">
            <div className="credit-card-expiration-date-and-cvc">
              <div className="expiration-date">
                <label >SKT (AY/YIL)</label>
                <div className="expiration-date-month-year">
                  <div className="input-with-error">
                    <input
                      type="text"
                      maxLength={2}
                      value={expirationDateMonth}
                      className={[
                        focusedInput === 'month' ? 'focused' : '',
                        errors.expirationDateMonth ? 'input-error' : ''
                      ].join(' ')}
                      onFocus={() => setFocusedInput('month')}
                      onBlur={() => setFocusedInput('')}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                        setExpirationDateMonth(value)
                        clearError('expirationDateMonth')
                      }}
                    />
                    {errors.expirationDateMonth && (
                      <span className="error-message">{errors.expirationDateMonth}</span>
                    )}
                  </div>
                  <div className="input-with-error">
                    <input
                      type="text"
                      maxLength={2}
                      value={expirationDateYear}
                      className={[
                        focusedInput === 'year' ? 'focused' : '',
                        errors.expirationDateYear ? 'input-error' : ''
                      ].join(' ')}
                      onFocus={() => setFocusedInput('year')}
                      onBlur={() => setFocusedInput('')}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                        setExpirationDateYear(value)
                        clearError('expirationDateYear')
                      }}
                    />
                    {errors.expirationDateYear && (
                      <span className="error-message">{errors.expirationDateYear}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="credit-card-cvc">
                <label>CVC</label>
                <div className="input-with-error">
                  <input
                    type="text"
                    maxLength={3}
                    value={cardCvcNumber}
                    className={[
                      focusedInput === 'cvc' ? 'focused' : '',
                      errors.cardCvcNumber ? 'input-error' : ''
                    ].join(' ')}
                    onFocus={() => setFocusedInput('cvc')}
                    onBlur={() => setFocusedInput('')}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 3);
                      setCardCvcNumber(value)
                      clearError('cardCvcNumber')
                    }}
                  />
                  {errors.cardCvcNumber && (
                    <span className="error-message">{errors.cardCvcNumber}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleSubmit}>Onayla</button>
        </div>
      </div>
    </>
  )
}