import React, { useState, useEffect } from 'react';

const VipTicketCal = ({ ticketPrice, ticketAmount }) => {
  const [totalCost, setTotalCost] = useState(ticketAmount * ticketPrice);

  useEffect(() => {
    setTotalCost(ticketAmount * ticketPrice);
  }, [ticketAmount, ticketPrice]);


  return (
    <>
    <div>
      <div>{ticketAmount} <span className='text-Hotpink font-bold'>VIP</span> TICKET </div>
      <div> {totalCost} DKK</div>
    </div>
    </>
  );
};

export default VipTicketCal; 


