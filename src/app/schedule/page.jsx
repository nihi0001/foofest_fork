
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
    <h1 className={`text-White text-4xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 ${BowlbyOne.className} text-center text-fooYellow-200 mt-32`}>Schedule</h1>
    <div className="flex items-center justify-center">
        <form action="{`lineup/${band.slug}`} prefetch={false}>">
        <label for="artist"></label>
        <select className="rounded-2xl p-3 border-2 w-60 border-Hotpink" id="artist" name="id">
            <option value="Alternative Rock">Alternative Rock</option>
            <option value="Alternative Metal">Alternative Metal</option>
            <option value="Hypertrash">Hypertrash</option>
     
            </select>
        <input type="submit" value="filter"/>
    </form>
    </div>
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

