import React from 'react'
import BuyTicket from './BuyTicket'

export default function VipTicket() {
  return (
    <div className='grid gap-4 bg-Darkblue border-solid border-Hotpink border-2 p-10 rounded-2xl w-80'>
      <h2 className='text-3xl text-start font-normal'>
        <span className='text-Hotpink font-bold'>VIP </span>
        TICKET
      </h2>

      <div className='text-start'>
        <ul className='list-disc list-inside font-normal text-lg'>
          <li>Full-week festival access</li>
          <li>VIP restrooms</li>
          <li>Access to afterparties</li>
        </ul>
      </div>


      {/* Children */}
      <h3 className='text-xl text-start'>From 1299 DKK</h3>

      <BuyTicket />
    </div>
  );
}

