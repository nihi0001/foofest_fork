
import React, { useState, useEffect } from 'react';

const TwoTentCal = ({ tentPrice, tentAmount}) => {
  const [tentTotalCost, setTentTotalCost] = useState(tentAmount * tentPrice);

  useEffect(() => {
    setTentTotalCost(tentAmount * tentPrice); 
  }, [tentAmount, tentPrice]);


  return (
    <>
    <div>
      <div>{tentAmount}X <span className='text-Hotpink text-xl'>2</span> PERSON TENT </div>
      <div>{tentTotalCost} DKK</div>
    </div>
    </>
  );
};

export default TwoTentCal; 


