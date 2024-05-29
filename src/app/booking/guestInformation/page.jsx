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
    <main className="xl:px-28">
      <div className=" text-White bg-Darkblue p-4 sm:p-8 md:p-12 m-2 sm:m-4 md:m-20 mt-10 sm:mt-12 md:mt-20 rounded-3xl border-2 border-Hotpink">
        <h1 className={`text-White text-3xl md:text-4xl mb-10 md:mb-8 ${BowlbyOne.className}`}>
          INFORMATION
        </h1>
        <div className="grid xl:flex">
          <div className="mb-5 w-full">
            <div className="w-full max-w-sm mb-10 md:mb-2">
              <GuestForm />
            </div>
          </div>
          <div className="md:flex justify-center w-full">
            <div className="w-full max-w-sm mb-6 md:mb-2 m-auto">
              <InformationBasket />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
