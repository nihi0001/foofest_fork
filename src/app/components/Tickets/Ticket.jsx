import priser from '@/js/settings';
import SecondParentComponent from '../../TicketComponent/SecondParentComponent';
import ParentComponent from '../../TicketComponent/ParentComponent';
import ChooseTicket from '../ChooseTicket';  


export default function Ticket(props) {

  const ticketCount = props.ticketcount2 + props.ticketcount1;
  const TotalTicketCount = props.ticketcount1 * 799 + props.ticketcount2 * 1299;
  const bookingFee = TotalTicketCount > 0 ? 99 : 0;
  const totalPrice = TotalTicketCount + bookingFee;


  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8 text-White w-64'>
    <h2 className='text-White text-2xl font-bold'>ITEMS</h2>
    
    <ParentComponent 
     ticketCount={props.ticketcount1} 
     handleTicketChange={props.handleTicketChange} 
     handleRemoveTicket={props.handleRemoveTicket} 
     ticketPrice={799}/>

    <SecondParentComponent 
    ticketcount={props.ticketcount2} 
    handleTicketChange={props.handleTicketChange2} 
    handleRemoveTicket={props.handleRemoveTicket2} 
    ticketPrice={1299}/>

    <h2>{ticketCount} TICKETS {TotalTicketCount}</h2>
    <p>BOOKING FEE {bookingFee} DKK</p>

    <p className='text-xl'><span className='text-Hotpink'>TOTAL</span> {totalPrice} DKK </p>
  
    <ChooseTicket />
    </div>
  );
}


