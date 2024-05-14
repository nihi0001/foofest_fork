"use client"
import { useState } from 'react'
import SecondParentComponent from '../TicketComponent/SecondParentComponent';
import ParentComponent from '../TicketComponent/ParentComponent';
import ChooseTicket from './ChooseTicket';





export default function Ticket() {
  const [ticketCount, setTicketCount] = useState(0);

  const handleTicketChange = (count) => {
    setTicketCount(count);
  };
  
  const handleRemoveTicket = () => {
    if (ticketCount > 0) {
      setTicketCount(prevCount => prevCount - 1);
    }
  };

  const [ticketCount2, setTicketCount2] = useState(0);

  const handleTicketChange2 = (count) => {
    setTicketCount2(count);
  };
  
  const handleRemoveTicket2 = () => {
    if (ticketCount > 0) {
      setTicketCount2(prevCount => prevCount - 1);
    }
  };

  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8 text-White'>
    <h2 className='text-White'>ITEMS</h2>

    <ParentComponent ticketCount={ticketCount} handleTicketChange={handleTicketChange} handleRemoveTicket={handleRemoveTicket} ticketPrice={799}/>
    <SecondParentComponent ticketCount={ticketCount2} handleTicketChange={handleTicketChange2} handleRemoveTicket={handleRemoveTicket2} ticketPrice={1299}/>

    <p>Total {ticketCount * 799
    + ticketCount2 * 1299} DKK</p>
    
    
    <ChooseTicket />
    </div>
  );
}


