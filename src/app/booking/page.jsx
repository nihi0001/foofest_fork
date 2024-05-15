// tickets page (forsiden til billetter)
import React from 'react'
import FooTicket from '../components/FooTicket';
import VipTicket from '../components/VipTicket';


export default function page() {
  return (
    <>
    <div className='bg-[url(/artists-shorter-BANNER.webp)] p-12 bg-center bg-no-repeat bg-cover w-full h-3/6 md:bg-top'>
      <h1 className='text-White text-5xl mt-96 text-center mb-8 md:text-9xl md:mt-80 md:p-7 md:mb-5'>TICKETS</h1>

      <div className='flex flex-col items-center gap-10 p-10 text-White md:flex-row md:justify-center md:gap-20 md:p-15'>
        <FooTicket />
        <VipTicket />
      </div>
    </div>
    </>
  );
}
