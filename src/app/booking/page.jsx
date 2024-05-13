// tickets page (forsiden til billetter)
import React from 'react'
import BuyTicket from '../components/BuyTicket';


export default function page() {
  return (
    <div className='flex text-White justify-center gap-x-96 p-12'>

    <div className='grid border-solid border-Hotpink border-2 p-10 rounded-xl'>
    <h2><strong>FOO </strong>TICKET</h2>

    <li>Lorem</li>
    <li>Lorem</li>
    <li>Lorem</li>

    {/* Children */}
    <h3>From 799 DKK</h3>

    <BuyTicket />
    </div>


    

    <div className='grid border-solid border-Hotpink border-2 p-10 rounded-xl'>
    <h2><strong><span className='text-Hotpink'>VIP </span>TICKET</strong></h2>

    <li>Lorem</li>
    <li>Lorem</li>
    <li>Lorem</li>


    {/* Children */}
    <h3>From 1299 DKK</h3>

    <BuyTicket />
    </div>
    </div>

    
  );
}
