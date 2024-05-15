
import SecondParentComponent from '../TicketComponent/SecondParentComponent';
import ParentComponent from '../TicketComponent/ParentComponent';
import ChooseTicket from './ChooseTicket';





export default function Ticket(props) {

  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8 text-White w-64'>
    <h2 className='text-White text-2xl font-bold'>ITEMS</h2>
    
    <ParentComponent ticketCount={props.ticketCount} handleTicketChange={props.handleTicketChange} handleRemoveTicket={props.handleRemoveTicket} ticketPrice={799}/>
    <SecondParentComponent ticketCount={props.ticketCount2} handleTicketChange={props.handleTicketChange2} handleRemoveTicket={props.handleRemoveTicket2} ticketPrice={1299}/>

    <h2>{props.ticketCount2 + props.ticketCount} TICKETS {props.ticketCount * 799 + props.ticketCount2 * 1299}</h2>
    <p>BOOKING FEE 99 DKK</p>

    <p className='text-xl'><span className='text-Hotpink'>TOTAL</span> {props.ticketCount * 799
    + props.ticketCount2 * 1299} DKK</p>
    
    
    <ChooseTicket />
    </div>
  );
}


