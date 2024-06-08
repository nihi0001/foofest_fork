// guest information / form 
"use client"
import { Bowlby_One } from "next/font/google";
import GuestForm from "@/app/components/GuestForm";
import InformationBasket from "@/app/components/Tickets/InformationBasket";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Formpage() {
  return (
    <main>
      <div className="text-White bg-Darkblue p-4 sm:p-6 md:p-12 lg:p-16 m-4 sm:m-4 md:m-12 lg:mx-44 rounded-3xl border-2 border-Hotpink">
      <h1 className={`${BowlbyOne.className} text-White text-4xl sm:text-6xl mb-5 md:p-8 text-start sm:text-center`}>INFORMATION</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <div className="w-full">
            <div className="w-full mb-6 md:mb-4 lg:mb-2">
              <GuestForm />
            </div>
          </div>
          <div className="w-full md:flex">
            <div className="w-full max-w-md mb-6">
              <InformationBasket />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}