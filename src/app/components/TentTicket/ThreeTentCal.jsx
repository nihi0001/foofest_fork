
import React, { useState, useEffect } from 'react';

const ThreeTentCal = ({ tentPrice, tentAmount}) => {
  const [tentTotalCost, setTentTotalCost] = useState(tentAmount * tentPrice);

  useEffect(() => {
    setTentTotalCost(tentAmount * tentPrice); 
  }, [tentAmount, tentPrice]);


  return (
    <>
    <div>
      <div>{tentAmount}X 3 PERSON TENT </div>
      <div>{tentTotalCost} DKK</div>
    </div>
    </>
  );
};

export default ThreeTentCal; 