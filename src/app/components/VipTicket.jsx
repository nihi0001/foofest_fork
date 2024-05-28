import React from 'react'
import BuyTicket from './BuyTicket'

export default function VipTicket() {
  return (
    <div className='grid gap-4 bg-Darkblue border-solid border-Hotpink border-2 p-10 rounded-2xl w-72'>
      <h2 className='text-3xl text-start font-normal'>
        <span className='text-Hotpink font-bold'>VIP </span>
        TICKET
      </h2>
      
      <div className='text-start'>
      <li>Priority entry</li>
      <li>VIP restrooms</li>
      <li>Access to afterparties</li>
      </div>
      
      
      {/* Children */}
      <h3 className='text-xl text-start'>From 1299 DKK</h3>
      
      <BuyTicket />
      </div>
  );
}

