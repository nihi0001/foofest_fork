
"use client"
import TicketCalculator from '../components/TicketCalculator';



const ParentComponent = ({ticketCount, ticketPrice}) => {
 
  return (
    <>
    <div className='text-White flex gap-8'>
      <div>
        <TicketCalculator ticketPrice={ticketPrice} ticketAmount={ticketCount} />
      </div>
    </div>
  </>
  );
};

export default ParentComponent;
