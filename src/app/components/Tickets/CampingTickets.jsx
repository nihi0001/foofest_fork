import ChooseTicket from '../ChooseTicket';  
import TentTicketCalculator from '../TentTicket/TentTicketCalulator';


export default function Ticket(props) {

  const ticketCount = props.ticketCount2 + props.ticketCount1;
  const TotalTicketCount = props.ticketCount1 * 799 + props.ticketCount2 * 1299;
  const bookingFee = TotalTicketCount > 0 ? 99 : 0;
  const totalPrice = TotalTicketCount + bookingFee;



  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8 text-White w-64'>
    <h2 className='text-White text-2xl font-bold'>ITEMS</h2>
    
    <h2>{ticketCount} FOO TICKETS {totalPrice}</h2>

    <TentTicketCalculator 
    ticketAmount2={props.ticketCount2} 
    handleTicketChange={props.handleTicketChange2} 
    handleRemoveTicket={props.handleRemoveTicket2} 
    ticketPrice2={1299}/>

    <TentTicketCalculator 
    ticketAmount1={props.ticketCount1} 
    handleTicketChange={props.handleTicketChange1} 
    handleRemoveTicket={props.handleRemoveTicket1} 
    ticketPrice1={799}/>  

    <h2>Camping Area</h2>
    <p>{}</p>

    <h2>{ticketCount} TICKETS {TotalTicketCount}</h2>
    <p>BOOKING FEE {bookingFee} DKK</p>

    <p className='text-xl'><span className='text-Hotpink'>TOTAL</span> {totalPrice} DKK </p>
  
    <ChooseTicket />
    </div>
  );
}


