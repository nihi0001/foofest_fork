
import React, { useState, useEffect } from 'react';

const ThreeTentCal = ({ tentPrice, tentAmount}) => {
  const [tentTotalCost, setTentTotalCost] = useState(tentAmount * tentPrice);

  useEffect(() => {
    setTentTotalCost(tentAmount * tentPrice); 
  }, [tentAmount, tentPrice]);


  return (
    <>
    <div>
      <div className='text-xl'>{tentAmount}X <span className='text-Hotpink text-xl font-bold'>3</span> PERSON TENT </div>
      <div>{tentTotalCost} DKK</div>
    </div>
    </>
  );
};

export default ThreeTentCal; 