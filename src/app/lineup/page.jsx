"use client"
import React from 'react'
import Artistcard from "@/app/components/Artistcard";
import LineupBanner from '../components/LineupBanner';
import { Bowlby_One } from 'next/font/google';

const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: "FooFest | Line up",
  description: "Explore the FOO Festival 2024 lineup and discover the top techno artists set to perform.",

};


function page() {
  return (
    <div>
      <LineupBanner/>
      <h1 className={`text-White text-5xl -mt-5 text-center mb-8 md:text-8xl md:-mt-20 md:p-7 ${BowlbyOne.className}`}>LINE UP</h1>

      <Artistcard />
      
    </div>
  )
}

export default page

