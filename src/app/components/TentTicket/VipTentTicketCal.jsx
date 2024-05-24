
import React, { useState, useEffect } from 'react';

const TentTicketCalculator = ({ VipTentPrice, ViptentAmount}) => {
  const [ThreeTentTotalCost, setThreeTentTotalCost] = useState(ViptentAmount * VipTentPrice );

  useEffect(() => {
    setThreeTentTotalCost(ViptentAmount * VipTentPrice);
  }, [ViptentAmount, VipTentPrice]);


  return (
    <>
    <div>
      <div>{ViptentAmount}X 3 PERSON TENT </div>
      <div> {ThreeTentTotalCost} DKK</div>
    </div>
    </>
  );
};

export default TentTicketCalculator;


