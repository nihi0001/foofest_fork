"use client"
import { useState } from 'react'
// import { useSearchParams } from 'next/navigation';
import CampingTickets from "@/app/components/Tickets/CampingTickets";
import RemoveTent from '@/app/components//Buttons/Removetent';
import AddTent from '@/app/components//Buttons/AddTent';


export default function Home() {
  // const searchParams = useSearchParams()
  // const regular = searchParams.get('ticketcount1')
  // const vip = searchParams.get('ticketcount2')

  // + laver det om til et tal fremfor en string
  const [tentTicket, setTentTicket] = useState(0);
  const [vipTentTicket, setVipTentTicket] = useState(0);

  const handleAddTent = (count) => {
    setTentTicket(count); 
  };
  
  const handleRemoveTent = () => {
    if (tentTicket > 0) {
      setTentTicket(prevCount => prevCount - 1);
    }
  };

  const handleAddVipTent = (count) => {
    setVipTentTicket(count);
  };
  
  const handleRemoveVipTent = () => {
    if (vipTentTicket > 0) {
      setVipTentTicket(prevCount => prevCount - 1);
    }
  };

  // useEffect(() => {
  //   const available = fetch('https://yielding-cooperative-tarsal.glitch.me/available-spots')
  //     .then((res) => res.json());
  // }, []);



  return (
    <>
    <form action="">
    <div className="border-solid bg-Darkblue border-Hotpink border-2 rounded-3xl p-8 w-7/12 m-auto mt-10">
      <h1 className="text-White md:text-6xl">CHOOSE YOUR CAMPING AREA:</h1>
        <div className="flex justify-start p-8 gap-20">
          

          <div> 
            <div className='grid grid-cols-2 text-White'>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Svartheim</label>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Nilfheim</label>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Helheim</label>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Muspelheim</label>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Alfheim</label>
            </div>
            <br />  

            <div className='flex gap-24'>
              <div className='text-White'>
                <h2 className="text-xl text-White"><span className='font-bold text-Lightpink'>2</span> PERSON TENT</h2>
                <p>799 DKK</p>
              </div>
              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveTent onRemoveTentClick={handleRemoveTent} /> 
                <input 
                name="tentTicket" 
                value={tentTicket}
                className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' 
                 />
                <AddTent onAddTentClick={() => handleAddTent(tentTicket + 1)} />
              </div>
            </div>

            <br />
            <div className='flex gap-28'>
              <div>
                <h2 className='text-White text-xl'><span className='font-bold text-Lightpink'>3</span>PERSON TENT</h2>
                <p className='text-White text-base'>1299 DKK</p>
              </div>

              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveTent onRemoveButtonClick={handleRemoveVipTent} /> 
                <input 
                name="vipTentTicket" 
                value={vipTentTicket}
                className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' 
                 />
                <AddTent onAddTentClick={() => handleAddVipTent(vipTentTicket + 1)} />
              </div>
            </div>
            <br />
          </div>
    
      
          <div> 
            <CampingTickets 
            tentTicket={tentTicket} 
            handleAddTentChange={handleAddTent} 
            handleRemoveTent={handleRemoveTent} 
            tentPrice={799}
            vipTentTicket={vipTentTicket} 
             handleAddVipTent={handleAddVipTent} 
             handleRemoveVipTent={handleRemoveVipTent} 
             VipTentPrice={1299} />
          </div>
        </div>
    </div>
    </form>
    </>
  );
}