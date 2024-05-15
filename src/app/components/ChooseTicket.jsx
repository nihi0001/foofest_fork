import React from 'react'
import Link from 'next/link'

function ChooseTicket() {
  return (
    <Link className='bg-Hotpink rounded-full py-3 px-6 text-xs text-center w-fit m-auto' href="/booking/campingArea">
    BUY TICKET
    </Link>
  )
}

export default ChooseTicket