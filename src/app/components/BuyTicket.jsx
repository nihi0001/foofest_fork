import React from 'react'
import Link from 'next/link';

export default function BuyTicket() {
  return (
    <Link className='bg-Hotpink rounded-full py-3 px-8 text-sm text-center mt-5 w-fit m-auto hover:bg-Lightpink' href="/booking/ticketoverview">
      BUY TICKET
    </Link>
  );
}

