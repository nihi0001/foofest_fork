"use client";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cards from 'react-credit-cards-2';
import { Bowlby_One } from "next/font/google";


const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const CardPayment = () => {
  const [creditCardInfo, setCreditCardInfo] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    
    const isValid = creditCardInfo.number && creditCardInfo.expiry && creditCardInfo.cvc && creditCardInfo.name;
    setIsFormValid(isValid);
  }, [creditCardInfo]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setCreditCardInfo((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setCreditCardInfo((prev) => ({ ...prev, focus: evt.target.name }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isFormValid) {
      router.push('/booking/orderConfirmation');
    }
  }

  return (
    <div className='p-6 m-12 rounded-3xl border-2 border-Hotpink bg-Darkblue max-w-5xl mx-auto'>
      <h1 className={`text-2xl text-center text-White md:text-4xl mt-2 mb-8 ${BowlbyOne.className}`}>PAYMENT DETAILS</h1>
      <div className='md:grid grid-cols-2 justify-center items-center'>
        <section>
          <Cards
            number={creditCardInfo.number}
            expiry={creditCardInfo.expiry}
            cvc={creditCardInfo.cvc}
            name={creditCardInfo.name}
            focused={creditCardInfo.focus}
          />
        </section>
        <section>
          <form className='flex flex-col m-6' onSubmit={handleSubmit}>
            <input className='m-4 p-2 rounded-md bg-White hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink'
              type="numeric"
              name="number"
              placeholder="Card Number"
              pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
              maxLength="16"
              required
              value={creditCardInfo.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input className='m-4 p-2 rounded-md bg-White hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink'
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={creditCardInfo.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <div className='grid grid-cols-2'>
              <input className='m-4 p-2 rounded-md bg-White hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink'
                type="numeric"
                name="expiry"
                placeholder="Expiration date"
                pattern="\d\d/\d\d"
                maxLength="4"
                required
                value={creditCardInfo.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input className='m-4 p-2 rounded-md bg-White hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink'
                type="numeric"
                name="cvc"
                placeholder="CVC"
                pattern="\d{3}"
                maxLength="3"
                required
                value={creditCardInfo.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <button 
              type="submit" 
              className={`text-center text-White p-2 m-4 font-bold rounded-full ${isFormValid ? 'bg-Hotpink hover:bg-Lightpink' : 'bg-Hotpink  opacity-70 cursor-not-allowed'} text-white w-60`} 
              disabled={!isFormValid}
            >
              COMPLETE PURCHASE
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default CardPayment;
