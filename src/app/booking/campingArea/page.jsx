// choose your area

import Campingarea from '@/app/components/Campingarea'
import Ticket from '@/app/components/Ticket';
import React from 'react'

export default function page() {
  return (

  <div className='grid border-solid border-Hotpink border-2 p-10 rounded-3xl text-White w-7/12 m-auto mt-12 '>
    <h1 className='text-4xl font-bold mb-8'>CHOOSE YOUR CAMPING AREA:</h1>

    <div className='grid grid-cols-2'>
      <div>
        <div className='grid grid-cols-2'>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </div>
        <br />

        
        <div className='grid'>
        <h2 className='text-xl'>TENT</h2>
          <div className='flex justify-start gap-28'>
            <div>
              <h3 className='items-center'><span className='text-Hotpink'>2 </span>PERSON TENT <br />799 DKK</h3>
            </div>
          </div>
          <br />

          <div className='flex justify-start gap-28'>
            <div>
              <h3 className='items-center'><span className='text-Hotpink'>3 </span>PERSON TENT <br />1299 DKK</h3>
            </div>

          </div>
          <br />

          <h2>EXTRA</h2>
          <li>GREEN CAMPING</li>
        </div>
      </div>

      <div>
        <Campingarea />
      </div>
    </div>
  </div>
  );
}



