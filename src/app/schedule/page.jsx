
import React from "react";
import { Bowlby_One } from "next/font/google";
import Image from "next/image";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// export const metadata = {
// title: "FooFest | Program",
//}; 


export default async function SchedulePage() {

  //data fetching fra band
  const bands = await fetch(
    "https://yielding-cooperative-tarsal.glitch.me/bands"
  ).then((r) => r.json());

  //data fetching fra schedule
  const schedule = await fetch(
    "https://yielding-cooperative-tarsal.glitch.me/schedule"
  ).then((r) => r.json());

  const scenes = ["Midgard", "Jotunheim", "Vanaheim"];
  const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(schedule.Midgard);
  //mapper image fra /bands ind og scener + ugedage fra /schedule
  return (
  <section>
    <h1 className="text-White text-6xl text-center mb-5 p-16">SCHEDULE</h1>
    <div>
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
    </div>
  </section>


  );
}

