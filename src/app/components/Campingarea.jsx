import React from 'react'
import ParentComponent from '../ParentComponent/ParentComponent';
import SecondParentComponent from '../ParentComponent/SecondParentComponent';

export default function Campingarea() {
  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8'>
    <h2>ITEMS</h2>

    <ParentComponent />
    <SecondParentComponent />

    <h3>2x <span className='text-White'>TICKETS</span><br /> Mathrandom <span>BOOKING FEE</span> 99 DKK</h3>

    <h3> <span className='text-Hotpink font-bold'>TOTAL </span>Math random</h3>
    
    <button className='bg-Hotpink rounded-2xl p-2 text-xs'>
        CHOOSE TICKET
    </button>
    </div>
  );
}


