// line up

import React from 'react'
import Artistcard from '../components/Artistcard'

function page() {
  return (
    <div>
        <h1 className='text-center'>LINE UP</h1>

        <div className='flex mr-2'>
            <button className='bg-Hotpink text-White'>ALLE DAGE</button>
            <button className='bg-Hotpink text-White'>TORSDAG</button>
            <button className='bg-Hotpink text-White'>FREDAG</button>
            <button className='bg-Hotpink text-White'>LØRDAG</button>
        </div>

        <Artistcard/>
      
    </div>
  )
}

export default page
