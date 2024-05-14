
"use client"
import React, { useState } from 'react';
import TicketCalculator from '../components/TicketCalculator';
import RemoveButton from '../components/RemoveButton';
import AddButton from '../components/AddButton';


const ParentComponent = ({ticketCount, handleTicketChange, handleRemoveTicket, ticketPrice}) => {
 
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
