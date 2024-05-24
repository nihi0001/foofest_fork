"use client"
import TentTicketCalculator from '../components/TentTicketCalculator';



const TentParent = ({TentCount, tentPrice}) => {
 
  return (
    <>
    <div className='text-White flex gap-8'>
      <div>
        <TentTicketCalculator tentPrice={tentPrice} TentCount={TentCount} />
      </div>
    </div>
  </>
  );
};

export default TentParent;  