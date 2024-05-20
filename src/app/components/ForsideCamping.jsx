import React from 'react'
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function ForsideCamping() {
  return (
      <div className="max-w-5xl mx-auto mb-24">
        <div className="flex flex-col items-center ">
          <h2 className={`text-White text-5xl mb-12 ${BowlbyOne.className}`}>CAMPING AREAS</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-9  text-White">

            <div className="bg-Navyblue rounded-xl hover:bg-Hotpink transition duration-300 border-2 border-Hotpink ">
              <img src="/dummyImage.jpg" alt="dummy" className="w-full h-48 object-cover rounded-xl" />
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-4 text-White uppercase">Friday and Saturday are sold out!</h3>
                <p className="text-md">All single-day tickets for Friday and Saturday at FOO FESTIVAL 2024 are gone. We expect a fully sold-out festival, so buy your ticket in time.</p>
              </div>
            </div>

            <div className="bg-Navyblue rounded-xl  hover:bg-Hotpink transition duration-300 border-2 border-Hotpink">
              <img src="/dummyImage.jpg" alt="dummy" className="w-full h-48 object-cover rounded-xl" />
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-4 text-White uppercase">Get guided through the music</h3>
                <p className="text-md">FOO Festival 2024 presents 186 music acts! Dreaming of getting to know some of the many gems before you arrive at the festival? Then this is your guide.</p>
              </div>
            </div>

            <div className="bg-Navyblue rounded-xl  hover:bg-Hotpink transition duration-300 border-2 border-Hotpink">
              <img src="/dummyImage.jpg" alt="dummy" className="w-full h-48 object-cover rounded-xl" />
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-4 text-White uppercase">The schedule is ready!</h3>
                <p className="text-md">Now you can truly plan FOO Festival 2024 down to the details. Today, we present the completed schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
  )
}

export default ForsideCamping