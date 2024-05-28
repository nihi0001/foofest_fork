import React from 'react';
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Footer() {
  return (
    <section className='p-6 md:p-12 bg-Darkblue'>
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12 text-center md:text-left'>
        
        <div className='order-2 md:order-1'>
          <h2 className='text-Hotpink font-bold text-3xl mb-2'>LINKS</h2>
          <p className='text-md md:text-lg text-White'>About Foo Festival</p>
          <p className='text-md md:text-lg text-White'>Privacy policy</p>
          <p className='text-md md:text-lg text-White'>Terms of use</p>
          <p className='text-md md:text-lg text-White'>FAQ</p>
        </div>

        <div className='order-1 md:order-2 md:flex md:flex-col md:items-center'>
          <h2 className={`text-White font-bold text-3xl ${BowlbyOne.className}`}><span className='text-Hotpink'>© </span>FOO FESTIVAL</h2>
          <p className='text-lg text-White'>KEA - MMD 3. SEM</p>
        </div>

        <div className='order-3 md:order-3 md:ml-0 lg:ml-40'>
          <h2 className='text-Hotpink font-bold text-3xl mb-2'>CONTACT</h2>
          <p className='text-md md:text-lg text-White'>info@foofestival.com</p>
          <p className='text-md md:text-lg text-White'>+4512345432</p>
          <p className='text-md md:text-lg text-White'>Festvej 1, 8000 Aarhus</p>
        </div>

      </div>
    </section>
  );
}
