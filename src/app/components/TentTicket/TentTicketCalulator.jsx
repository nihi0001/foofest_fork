
import React, { useState, useEffect } from 'react';

const TentTicketCalculator = ({ ticketPrice1, ticketAmount1}) => {
  const [totalCost, setTotalCost] = useState(ticketAmount1 * ticketPrice1 );

  useEffect(() => {
    setTotalCost(ticketAmount1 * ticketPrice1);
  }, [ticketAmount1, ticketPrice1]);


  return (
    <>
    <div>
      <div>{ticketAmount1}X 2 PERSON TENT </div>
      <div> {totalCost} DKK</div>
    </div>

    {/* <div>
      <div>{ticketAmount2}X 3 PERSON TENT </div>
      <div> {totalCost} DKK</div>
    </div> */}
    </>
  );
};

export default TentTicketCalculator;


