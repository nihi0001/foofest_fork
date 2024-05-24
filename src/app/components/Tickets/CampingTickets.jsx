import ChooseTicket from '../ChooseTicket';  
import TentTicketCalculator from '../TentTicket/TentTicketCalulator';
import VipTentTicketCal from '../TentTicket/VipTentTicketCal';


export default function TentTicket(props) {

  const TentCount = props.VipTentPrice + props.tentPrice;
  const TotalTentCount = props.tentPrice * 799 + props.VipTentPrice * 1299;
  const bookingFee = TotalTentCount > 0 ? 99 : 0;
  const totalTentPrice = TotalTentCount + bookingFee;



  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8 text-White w-64'>
    <h2 className='text-White text-2xl font-bold'>ITEMS</h2>
    
    {/* <h2>X FOO TICKETS X</h2> */}

    <TentTicketCalculator 
    TentCount={props.tentPrice} 
    handleAddTentChange={props.handleAddTentChange} 
    handleRemoveTent={props.handleRemoveTent} 
    tentPrice={799}/>  

    <VipTentTicketCal
    TentCount={props.VipTentPrice} 
    handleAddVipTent={props.handleAddVipTent} 
    handleRemoveVipTent={props.handleRemoveVipTent} 
    tentPrice={1299}/> 

    {/* <h2>Camping Area</h2>
    <p>{}</p> */}

    <h2>{TentCount} TICKETS {TotalTentCount}</h2>
    <p>BOOKING FEE {bookingFee} DKK</p>

    <p className='text-xl'><span className='text-Hotpink'>TOTAL</span> {totalTentPrice} DKK </p>
  
    <ChooseTicket />
    </div>
  );
}


