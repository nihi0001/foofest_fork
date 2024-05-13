
"use client"
import React, { useState } from 'react';
import TicketCalculator from '../components/TicketCalculator';
import RemoveButton from '../components/RemoveButton';
import AddButton from '../components/AddButton';


const ParentComponent = () => {
  const [ticketPrice, setTicketPrice] = useState(1299);
  const [ticketCount, setTicketCount] = useState(0);

  const handleTicketChange = (count) => {
    setTicketCount(count);
  };
  
  const handleRemoveTicket = () => {
    if (ticketCount > 0) {
      setTicketCount(prevCount => prevCount - 1);
    }
  };

  return (
    <>
    <div className='text-White flex gap-8'>
      <div>
        <TicketCalculator ticketPrice={ticketPrice} ticketAmount={ticketCount} />
      </div>

      <div>
        <RemoveButton onRemoveButtonClick={handleRemoveTicket} /> 
        <AddButton onButtonClick={() => handleTicketChange(ticketCount + 1)} />
      </div>
    </div>
  </>
  );
};

export default ParentComponent;
