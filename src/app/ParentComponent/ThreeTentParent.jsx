"use client"
import ThreeTentCal from "../components/TentTicket/ThreeTentCal";




const ThreeTentParent = ({tentTicketCount, tentPrice}) => {
 
  return (
    <>
    <div className='text-White flex gap-8'>
      <div>
        <ThreeTentCal tentPrice={tentPrice} tentAmount={tentTicketCount} />
      </div>
    </div>
  </>
  );
};

export default ThreeTentParent;  