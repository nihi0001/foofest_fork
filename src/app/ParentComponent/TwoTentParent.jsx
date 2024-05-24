"use client"
import TwoTentCal from "../components/TentTicket/TwoTentCal";

const TwoTentParent = ({tentTicketCount, tentPrice}) => {
 
  return (
    <>
    <div className='text-White flex gap-8'>
      <div>
        <TwoTentCal tentPrice={tentPrice} tentAmount={tentTicketCount} />
      </div>
    </div>
  </>
  );
};

export default TwoTentParent;  