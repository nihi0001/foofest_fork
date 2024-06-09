"use client"
import { useState } from 'react'
import { Bowlby_One } from "next/font/google";
import Ticket from "@/app/components/Tickets/Ticket";
import RemoveTicket from '@/app/components/RemoveTicket';
import AddButton from '@/app/components/AddButton';
import ChooseTicket from '@/app/components/ChooseTicket';



const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


export default function Home() {
  const [ticketcount1, setTicketcount1] = useState(0);
  const [ticketcount2, setTicketcount2] = useState(0);

  const handleTicketChange = (count) => {
    setTicketcount1(count);
  };

  const handleRemoveTicket = () => {
    if (ticketcount1 > 0) {
      setTicketcount1(prevCount => prevCount - 1);
    }
  };

  const handleTicketChange2 = (count) => {
    setTicketcount2(count);
  };

  const handleRemoveTicket2 = () => {
    if (ticketcount2 > 0) {
      setTicketcount2(prevCount => prevCount - 1);
    }
  };


  return (
    <>
      <form action='/booking/campingArea'>
        <div className='p-4 md:p-8'>
          <div className="max-w-6xl mx-auto border-solid bg-Darkblue border-Hotpink border-2 rounded-3xl p-8 mt-10">
            <h1 className={`${BowlbyOne.className} text-White text-4xl sm:text-6xl mb-5 md:p-8 text-start md:text-center`}>TICKETS</h1>
            {/* grid starter her */}
            <div className="grid sm:flex md:p-8 sm:gap-16 md:gap-28">
              <div className='md:mx-auto'>
                {/* venstre side, valg af billet*/}
                {/* h2 choose your tickets*/}
                <h2 className='mb-8 text-xl xl:text-2xl text-White font-semibold'>Choose your tickets:</h2>
                {/* Foo ticket */}
                <div className='grid mb-5 2xl:flex 2xl:gap-24'>
                  <div className='text-White'>
                    <h2 className="text-xl"><span className='text-Hotpink font-bold'>FOO</span> TICKET</h2>
                    <p>799 DKK</p>
                  </div>

                  <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                    <RemoveTicket onRemoveButtonClick={handleRemoveTicket} />
                    <input
                      name="ticketcount1"
                      className='border-solid border-2 border-Lightpink rounded-full w-36 bg-White p-2 text-center'
                      value={ticketcount1} />
                    <AddButton onButtonClick={() => handleTicketChange(ticketcount1 + 1)} />
                  </div>
                </div>

                <br />
                {/* VIP ticket */}
                <div className='grid mb-12 2xl:flex 2xl:gap-24'>
                  <div>
                    <h2 className='text-White text-xl'><span className='font-bold text-Hotpink'>VIP</span> TICKET</h2>
                    <p className='text-White text-base'>1299 DKK</p>
                  </div>

                  <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                    <RemoveTicket onRemoveButtonClick={handleRemoveTicket2} />
                    <input
                      name="ticketcount2"
                      className='border-solid border-2 border-Lightpink rounded-full w-36 bg-White p-2 text-center'
                      value={ticketcount2} />
                    <AddButton onButtonClick={() => handleTicketChange2(ticketcount2 + 1)} />
                  </div>
                </div>
              </div>

              {/* højre side, item basket */}
              <div className='grid gap-5 md:mx-auto'>
                <div>
                  <Ticket
                    ticketcount1={ticketcount1}
                    handleTicketChange={handleTicketChange}
                    handleRemoveTicket={handleRemoveTicket}
                    ticketPrice={799}
                    ticketcount2={ticketcount2}
                    handleTicketChange2={handleTicketChange2}
                    handleRemoveTicket2={handleRemoveTicket2}
                    ticketPrice2={1299} />
                </div>
                <div className='sm:flex sm:justify-center'>
                  <ChooseTicket />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}







