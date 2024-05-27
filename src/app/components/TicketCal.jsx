
import React, { useState, useEffect } from 'react';

const TicketCal = ({ ticketPrice, ticketAmount }) => {
  const [totalCost, setTotalCost] = useState(ticketAmount * ticketPrice);

  useEffect(() => {
    setTotalCost(ticketAmount * ticketPrice);
  }, [ticketAmount, ticketPrice]);


  return (
    <>
    <div>
      <div>{ticketAmount} FOO TICKET </div> 
      <div> {totalCost} DKK</div>
    </div>
    </>
  );
};

export default TicketCal; 

