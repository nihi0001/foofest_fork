"use client"
import { Bowlby_One } from "next/font/google";
import ScheduleBanner from '../components/ScheduleBanner';
import SchedulePoster from '../components/SchedulePoster';



const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
 
export default function Schedule() {
  return (
    <div>
      <ScheduleBanner/>
      <h1 className={`text-White text-5xl -mt-5 text-center mb-8 md:text-8xl md:-mt-20 md:p-7 ${BowlbyOne.className}`}>SCHEDULE</h1>

      <SchedulePoster/>
     
    </div>
  );
}








