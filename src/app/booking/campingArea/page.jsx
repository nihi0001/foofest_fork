"use client"
import { useState } from 'react'
import { Bowlby_One } from "next/font/google";
import { useSearchParams } from 'next/navigation';

import CampingTickets from "@/app/components/Tickets/CampingTickets";
import RemoveTent from '@/app/components/Buttons/RemoveTent';
import AddTent from '@/app/components/Buttons/AddTent';
import ChooseTicket from '@/app/components/ChooseTicket';

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  const searchParams = useSearchParams();
  const regular = searchParams.get('ticketcount1');
  const vip = searchParams.get('ticketcount2');

  // + laver det om til et tal fremfor en string
  const [twoTentTicket, setTwoTentTicket] = useState(0);
  const [threeTentTicket, setThreeTentTicket] = useState(0);
  const [campingArea, setCampingArea] = useState('');

  const handleAddTent = (count) => {
    setTwoTentTicket(count);
  };

  const handleRemoveTent = () => {
    if (twoTentTicket > 0) {
      setTwoTentTicket(prevCount => prevCount - 1);
    }
  };

  const handleAddVipTent = (count) => {
    setThreeTentTicket(count);
  };

  const handleRemoveVipTent = () => {
    if (threeTentTicket > 0) {
      setThreeTentTicket(prevCount => prevCount - 1);
    }
  };

  const handleCampingArea = (e) => {
    if (e.target.checked) {
      setCampingArea(e.target.value)
    } else setCampingArea('')
  };

  return (
    <>
      <form action="/booking/guestInformation">
        <input type="hidden" name="ticketcount1" value={regular} />
        <input type="hidden" name="ticketcount2" value={vip} />

        <div className='p-4 md:p-8'>
          <div className="max-w-6xl mx-auto border-solid bg-Darkblue border-Hotpink border-2 rounded-3xl p-8 mt-10">
            <h1 className={`${BowlbyOne.className} text-White text-4xl sm:text-6xl mb-5 md:p-8 text-start sm:text-center`}>CAMPING AREA</h1>

            {/* grid starter her */}
            <div className="grid sm:flex md:p-8 sm:gap-16 md:gap-28">
              {/* venstre side*/}
              <div className="md:mx-auto">
                {/* vælg campingområde*/}
                <h2 className='mb-8 text-xl xl:text-2xl text-White font-semibold'>Choose your camping area</h2>
                <div className='grid xl:grid-cols-2 text-White'>
                  <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Svartheim" onChange={handleCampingArea} type="radio" name='area' /> Svartheim</label>
                  <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Nilfheim" onChange={handleCampingArea} type="radio" name='area' /> Nilfheim</label>
                  <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Helheim" onChange={handleCampingArea} type="radio" name='area' /> Helheim</label>
                  <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Muspelheim" onChange={handleCampingArea} type="radio" name='area' /> Muspelheim</label>
                  <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Alfheim" onChange={handleCampingArea} type="radio" name='area' /> Alfheim</label>
                </div>
                <br />

                {/* valg af telt */}
                <h2 className='text-White text-xl xl:text-2xl mb-8 mt-12 font-semibold'>Choose your tents</h2>

                {/* 2 pers telt */}
                <div className='grid mb-5 2xl:flex 2xl:gap-24'>
                  <div className='text-White'>
                    <h2 className="text-xl text-White"><span className='font-bold text-Hotpink'>2</span> PERSON TENT</h2>
                    <p>299 DKK</p>
                  </div>

                  <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                    <RemoveTent onRemoveTentClick={handleRemoveTent} />
                    <input
                      name="twoTentTicket"
                      value={twoTentTicket}
                      className='border-solid border-2 border-Lightpink rounded-full w-36 bg-White p-2 text-center' />
                    <AddTent onAddTentClick={() => handleAddTent(twoTentTicket + 1)} />
                  </div>
                </div>

                <br />
                {/* 3 pers telt */}
                <div className='grid mb-12 2xl:flex 2xl:gap-24'>
                  <div>
                    <h2 className='text-White text-xl'><span className='font-bold text-Hotpink'> 3 </span>PERSON TENT</h2>
                    <p className='text-White text-base'>399 DKK</p>
                  </div>

                  <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                    <RemoveTent onRemoveTentClick={handleRemoveVipTent} />
                    <input
                      name="threeTentTicket"
                      value={threeTentTicket}
                      className='border-solid border-2 border-Lightpink rounded-full w-36 bg-White p-2 text-center'
                    />
                    <AddTent onAddTentClick={() => handleAddVipTent(threeTentTicket + 1)} />
                  </div>
                </div>
              </div>

              {/* item basket */}
              <div className='grid gap-5 md:mx-auto'>
                <div >
                  <CampingTickets
                    tentTicket={twoTentTicket}
                    handleAddTent={handleAddTent}
                    handleRemoveTent={handleRemoveTent}
                    tentPrice={299}
                    threeTentTicket={threeTentTicket}
                    handleAddVipTent={handleAddVipTent}
                    handleRemoveVipTent={handleRemoveVipTent}
                    threeTentPrice={399}
                    campingArea={campingArea}
                  />
                </div>
                <div className='sm:flex sm:justify-center sm:-mt-28 lg:-mt-24 xl:mt-0'>
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
