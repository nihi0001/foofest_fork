import React from 'react'
import Link from 'next/link';

export default function BuyTicket() {
  return (
    <Link className='bg-Hotpink rounded-full py-3 px-6 text-xs text-center w-fit m-auto' href="/booking/ticketoverview">
      BUY TICKET
    </Link>
  );
}

