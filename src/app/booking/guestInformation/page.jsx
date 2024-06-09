"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Bowlby_One } from "next/font/google";
import GuestForm from "@/app/components/GuestForm";
import InformationBasket from "@/app/components/Tickets/InformationBasket";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Formpage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 1 minute in seconds
  const [timeExpired, setTimeExpired] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 0) {
          clearInterval(timer);
          setTimeExpired(true);
          setShowPopup(true); // Show popup when time expires
        }
        return prevTime > 0 ? prevTime - 1 : prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeExpired) {
      setTimeout(() => {
        router.push('/');
      }, 5000); // Redirect to home page after 5 seconds
    }
  }, [timeExpired, router]);

  return (
    <main>
      <div className="text-White bg-Darkblue p-4 sm:p-6 md:p-12 lg:p-16 m-4 sm:m-4 md:m-12 lg:mx-44 rounded-3xl border-2 border-Hotpink">
     
        <h1 className={`${BowlbyOne.className} text-White text-4xl sm:text-6xl mb-5 md:p-8 text-start sm:text-center`}>INFORMATION</h1>
        {timeLeft > 0 && (
        <div className="sm:text-center mx-auto text-white sm:w-8/12 py-1 mb-12 border-b-2 border-Hotpink">
          <p className="text-xl font-normal">You have {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} to complete your order</p>
        </div>
      )}
        
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

      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-Hotpink bg-opacity-50">
          <div className="bg-White p-6 rounded-lg ">
            <p className="text-3xl font-bold mb-4">Your time has expired.</p>
            <p className="text-xl">You will be redirected to the home page shortly.</p>
          </div>
        </div>
      )}
    </main>
  );
}
