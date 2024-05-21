
"use client"
import React, { useState } from 'react';
import VipTicketCal from '../components/VipTicketCal';


const ParentComponent = ({ticketcount, ticketPrice}) => {

  return (
    <>
    <div className='text-White flex gap-8'>
      <div>
        <VipTicketCal ticketPrice={ticketPrice} ticketAmount={ticketcount} />
      </div>
    </div>
  </>
  );
};

export default ParentComponent;
