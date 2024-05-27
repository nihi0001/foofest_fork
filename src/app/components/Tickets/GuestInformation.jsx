"use client"
import { useSearchParams } from 'next/navigation';


export default function TentTicket(props) {
  //Info fra ticketsoverview
  const searchParams = useSearchParams()

  //Tickets
  const footicket = searchParams.get('ticketcount1')
  const vipticket = searchParams.get('ticketcount2')

  //CampingArea
  const area = searchParams.get('area')

  //Tents
  const twoTentTicket = searchParams.get('twoTentTicket')
  const threeTentTicket = searchParams.get('threeTentTicket')

  //Tent
  const totalTentCount = twoTentTicket * 299 + threeTentTicket * 399;

  //Lægger antal af tickets til hinanden her
  const ticketCount = +vipticket + +footicket;

  //Lægger antal af Tents til hinanden her
  const tentCount = +twoTentTicket + +threeTentTicket;


  const fooTicketsPrice = footicket * 799;
  const vipTicketsPrice = vipticket * 1299;

  const twoTentsPrice = twoTentTicket * 299;
  const threeTentsPrice = threeTentTicket * 399;

  const TicketsPrice = footicket * 799 + twoTentTicket * 1299;
  const TentsPrice = twoTentTicket * 299 + threeTentTicket * 399;
  
//Booking fee på 99 kr
  const bookingFee = totalTentCount > 0 ? 99 : 0;

  const tentAndTicketsPrice = TicketsPrice + TentsPrice;
  const totalPrice = bookingFee + TicketsPrice + TentsPrice;




  return (
    <>
    <form action="">
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8 text-White w-96'>
    <h2 className='text-White text-2xl font-bold'>ITEMS</h2>
    
    <h2>{footicket}X <span className='text-Hotpink font-bold'>FOO</span> TICKETS <br /> {fooTicketsPrice} DKK</h2>

    <h2>{vipticket}X <span className='text-Hotpink font-bold'>VIP</span> TICKETS <br /> {vipTicketsPrice} DKK</h2>

    <h2>{twoTentTicket}X <span className='text-Hotpink font-bold'>2</span> PERSONS TENT <br /> {twoTentsPrice} DKK</h2>

    <h2>{threeTentTicket}X <span className='text-Hotpink font-bold'>3</span> PERSONS TENT <br /> {threeTentsPrice} DKK</h2>

    <h2 className='-mb-4 text-2xl'>Area</h2>
    <p className='text-Hotpink'>{area}</p>

    <h2>{tentCount} TENTS <br /> {ticketCount} TICKETS <span className='ml-4'>{tentAndTicketsPrice} DKK</span></h2>
    <p className='text-xs'>BOOKING FEE 99 DKK</p>

    <hr className='text-Hotpink'/>

    <p className='text-xl -mb-4'><span className='text-Hotpink'>TOTAL</span> {totalPrice} DKK </p>
    
    </div>
    </form>
    </>
  );
}


