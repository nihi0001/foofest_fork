"use client"

import React from 'react'
import BuyTicket from './BuyTicket'

export default function FooTicket() {

  return (
    <div className='grid gap-4 bg-Darkblue border-solid border-Hotpink border-2 p-10 rounded-2xl w-72'>
      <h2 className='text-2xl'>FOO TICKET</h2>
      
      <div>
      <li>Lorem</li>
      <li>Lorem</li>
      <li>Lorem</li>
      </div>
      
      {/* Children */}
      <h3 className='text-xl'>From 799 DKK</h3>
      <BuyTicket />
      </div>
  );
}

