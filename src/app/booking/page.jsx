// tickets page (forsiden til billetter)
import React from 'react'
import FooTicket from '../components/FooTicket';
import VipTicket from '../components/VipTicket';
import BookingBanner from '../components/BookingBanner';


export default function page() {
  return (
    <>
    <BookingBanner />
    <div>
      <h1 className='text-White text-5xl -mt-5 text-center mb-8 md:text-9xl md:-mt-24 md:p-7 '>TICKETS</h1>
      <div className='flex flex-col items-center gap-10 p-10 text-White md:flex-row md:justify-center md:gap-20 md:p-15'>
        <FooTicket />
        <VipTicket />
      </div>
    </div>
    </>
  );
}
