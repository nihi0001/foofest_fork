import TwoTentParent from '@/app/ParentComponent/TwoTentParent';
import ThreeTentParent from '@/app/ParentComponent/ThreeTentParent';
import { useSearchParams } from 'next/navigation';


export default function TentTicket(props) {
  //Info fra ticketsoverview
  const searchParams = useSearchParams()
  const footicket = searchParams.get('ticketcount1')
  const vipticket = searchParams.get('ticketcount2')

  //Tent
  const tentTicketCount = props.threeTentTicket + props.tentTicket;
  const totalTentCount = props.tentTicket * 299 + props.threeTentTicket * 399;

  //Ticket den forrige side
  const ticketCount = +vipticket + +footicket;
  const TotalTicketCount = footicket * 799 + vipticket * 1299;
  const bookingFee = totalTentCount > 0 ? 99 : 0;
  const totalPrice = TotalTicketCount;

  const totalTentPrice = totalTentCount + totalPrice + bookingFee; 



  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8 text-White w-72'>
    <h2 className='text-White text-2xl font-bold'>ITEMS</h2>
    
    <h2 className='text-xl'>{ticketCount}X TICKETS <br /> 
    <span className='text-base'>{totalPrice} DKK</span></h2>

    <TwoTentParent 
    tentTicketCount={props.tentTicket}
    handleAddTent={props.handleAddTent} 
    handleRemoveTent={props.handleRemoveTent} 
    tentPrice={299}/>  

    <ThreeTentParent
    tentTicketCount={props.threeTentTicket} 
    handleAddTent={props.handleAddVipTent} 
    handleRemoveTent={props.handleRemoveVipTent}    
    tentPrice={399}/> 

    <h2 className='-mb-4 text-xl'>Camping Area</h2>
    <p className='text-Hotpink'>{props.campingArea}</p>

    <h2>{tentTicketCount} TENTS <br /> {totalTentCount} DKK</h2>

    <hr />

    <p className='text-xl -mb-5'><span className='text-Hotpink'>TOTAL</span> {totalTentPrice} DKK </p>
    <p className='text-xs'>BOOKING FEE 99 DKK</p>
    </div>
  );
}


