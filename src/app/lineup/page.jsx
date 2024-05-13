// line up

import React from 'react'
import Artistcard from '../components/Artistcard'

function page() {
  return (
    <div className="bg-[url('/lpBanner.png')] bg-cover bg-center p-12 h-screen">

    <div className='max-w-xl mx-auto'>
      <h1 className='text-White text-center'>LINE UP</h1>

          </div>


      
        <div className='flex gap-4'>
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
