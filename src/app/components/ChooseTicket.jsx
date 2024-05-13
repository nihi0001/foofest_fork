import React from 'react'
import Link from 'next/link'

function ChooseTicket() {
  return (
    <Link className='bg-Hotpink rounded-2xl p-2 text-xs' href="/booking/campingArea">
    BUY TICKET
    </Link>
  )
}

export default ChooseTicket