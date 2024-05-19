"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image';
 
export default function Schedule() {
  const [schedule, setSchedule] = useState(null)
  const [bands, setBands] = useState(null);
  const [loading, setLoading] = useState(true)

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
    const fetchSchedule = fetch('https://yielding-cooperative-tarsal.glitch.me/schedule')
      .then((res) => res.json());

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
 
  if (loading) return <p>Loading...</p>
  if (!schedule) return <p>No profile data</p>
 
  return (
    <div className='text-White'>
      <h1>Schedule</h1>
      <div>
      <ul>
        {Object.entries(schedule.Midgard || bands).map(([day, activities]) => (
          <li key={day}>
            <h2>{dayNames[day]}</h2>


            <ul>
              {activities.map((activity, index) => (
                <li key={index}>
                  <div className='flex gap-10 items-center p-2 border-2 border-solid border-Hotpink rounded-xl w-1/3'>
                  <p>{activity.start} - {activity.end}</p>
                  <p>{activity.act}</p>
                    <Image
                    alt="Artist presentation"
                    src={`https://yielding-cooperative-tarsal.glitch.me/logos/${bands.logo}`}
                    width={100}
                    height={100}
                  />
                  </div>
                </li>
              ))}
            </ul>

          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}



      

    {/* <div>
    {bands.map((band, schedule) => {
      return <div key={band.name}>
       
      <div>
        <p className="text-White">{schedule["start"]}</p>
          <Image
                alt="Artist presentation"
                src={`https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                width={350}
                height={350}
              />
      </div>
      </div>
    })}
    </div> */}




