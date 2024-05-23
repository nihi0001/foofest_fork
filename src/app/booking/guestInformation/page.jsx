// guest information / form 
"use client"
import { Bowlby_One } from "next/font/google";
import GuestForm from "@/app/components/GuestForm";
import { Suspense } from "react";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Formpage() {
  return (
    <main>
 <div className="text-White bg-Darkblue p-12 m-16 mt-20 rounded-md border-2 border-Hotpink" >
 <h1 className={` text-White text-4xl mb-8 ${BowlbyOne.className}`}>INFORMATION</h1>
      <div className="grid grid-cols-2">
      <div>
        <Suspense fallback="Loading..."></Suspense>
    <GuestForm/>
    </div>
    <div>
      </div>
    </div>
    </div>
   
  </main>
  )
}


