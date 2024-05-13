import React from 'react'
import Link from 'next/link';

export default function BuyTicket() {
  return (
    <Link href="/booking/ticketoverview">
    <button className='bg-Hotpink rounded-2xl p-2 text-xs'>
        BUY TICKET
    </button>
    </Link>
  );
}

