import SecondParentComponent from '../TicketComponent/SecondParentComponent';
import ParentComponent from '../TicketComponent/ParentComponent';
import ChooseTicket from './ChooseTicket';




export default function Ticket() {
  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8'>
    <h2 className='text-White'>ITEMS</h2>

    <ParentComponent />
    <SecondParentComponent />
    
    <ChooseTicket />
    </div>
  );
}


