"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { Bowlby_One } from "next/font/google";


const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
 
export default function Schedule() {
  const [schedule, setSchedule] = useState(null)
  const [bands, setBands] = useState(null);
  const [loading, setLoading] = useState(true)
  const [selectedDay, setSelectedDay] = useState('All');

  const dayNames = {
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
    sun: 'Sunday'
  };
 
  useEffect(() => {
    // fetching schedule
    const fetchSchedule = fetch('https://yielding-cooperative-tarsal.glitch.me/schedule')
      .then((res) => res.json());

    // fetching bands
    const fetchBands = fetch('https://yielding-cooperative-tarsal.glitch.me/bands')
      .then((res) => res.json());

      Promise.all([fetchSchedule, fetchBands])
      .then(([scheduleData, bandsData]) => {
        setSchedule(scheduleData);
        setBands(bandsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };
 
  if (loading) return <p>Loading...</p>
  if (!schedule) return <p>No profile data</p>

  const filteredSchedule = selectedDay === 'All' ? schedule.Midgard : { [selectedDay]: schedule.Midgard[selectedDay] };

  //const filteredSchedule = selectedDay === 'All' ? schedule.Vanaheim : { [selectedDay]: schedule.Vanaheim[selectedDay] };

  //const filteredSchedule = selectedDay === 'All' ? schedule.Jotunheim : { [selectedDay]: schedule.Jotunheim[selectedDay] };

 
  return (
    <div>
      
     <div className="flex items-center justify-center">
         <form action="{`lineup/${band.slug}`} prefetch={false}>">
         <label for="artist"></label>
         <select className="rounded-2xl p-3 border-2 w-60 border-Hotpink" id="artist" name="id" onChange={handleDayChange}>
             <option value="All">All</option>
             <option value="mon">Monday</option>
             <option value="tue">Tuesday</option>  
             <option value="wed">Wednesday</option>  
             <option value="thu">Thursday</option>  
             <option value="fri">Friday</option>  
             <option value="sat">Saturday</option>  
             <option value="sun">Sunday</option>   
             <input type="submit" value="filter"/>
             </select>
         
     </form>
     </div>
      
      <div>
      <ul className='text-White'>
        {Object.entries(filteredSchedule).map(([day, activities]) => (
          <li key={day}>
            <h2 className='flex justify-center p-20 -mb-16 text-5xl'>{dayNames[day]}</h2>

            <div>
            <ul>
            {activities && bands && activities.map((activity, band, index) => (
                <li key={index}>
                  <div className='flex justify-between gap-20 m-auto items-center border-2 border-solid border-Hotpink rounded-xl w-5/12 mb-5'>
                  <p className='pl-10'>{activity.start} - {activity.end}</p>
                  {/* <hr className='border-Hotpink border-2 border-solid h-24 w-1'  /> */}
                  <p>{activity.act}</p>
                  {/* <hr className='border-Hotpink border-2 border-solid h-24 w-1' /> */}
                    <Image
                    className=''
                    alt="Artist presentation"
                    src={`https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                    width={100}
                    height={100}
                  />
                  </div>
                </li>
              ))}
            </ul>
            </div>

          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}



      

  
// import React from "react";
// import { Bowlby_One } from "next/font/google";
// import Image from "next/image";

// const BowlbyOne = Bowlby_One({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

// // export const metadata = {
// // title: "FooFest | Program",
// //}; 


// export default async function SchedulePage() {

//   //data fetching fra band
//   const bands = await fetch(
//     "https://yielding-cooperative-tarsal.glitch.me/bands"
//   ).then((r) => r.json());

//   //data fetching fra schedule
//   const schedule = await fetch(
//     "https://yielding-cooperative-tarsal.glitch.me/schedule"
//   ).then((r) => r.json());

//   const scenes = ["Midgard", "Jotunheim", "Vanaheim"];
//   const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// console.log(schedule.Midgard);
//   //mapper image fra /bands ind og scener + ugedage fra /schedule
//   return (
//   <section>
//     <h1 className={`text-White text-4xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 ${BowlbyOne.className} text-center text-fooYellow-200 mt-32`}>Schedule</h1>
//     <div className="flex items-center justify-center">
//         <form action="{`lineup/${band.slug}`} prefetch={false}>">
//         <label for="artist"></label>
//         <select className="rounded-2xl p-3 border-2 w-60 border-Hotpink" id="artist" name="id">
//             <option value="Alternative Rock">Alternative Rock</option>
//             <option value="Alternative Metal">Alternative Metal</option>
//             <option value="Hypertrash">Hypertrash</option>
     
//             </select>
//         <input type="submit" value="filter"/>
//     </form>
//     </div>
//     <div>
//     {bands.map((band, schedule) => {
//       return <div key={band.name}>
       
//       <div>
//         <p className="text-White">{schedule["start"]}</p>
//           <Image
//                 alt="Artist presentation"
//                 src={`https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
//                 width={350}
//                 height={350}
//               />
//       </div>

          
          
//       </div>
//     })}
//     </div>
//   </section>


//   );
// }






