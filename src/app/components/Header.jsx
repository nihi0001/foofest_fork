"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Bowlby_One } from 'next/font/google';

const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-Hotpink py-2">
        <p className="text-xs sm:text-sm 2xl:text-xl text-White text-center font-medium tracking-wider">
          Camping Spots Still Available - Reserve Yours Today!
        </p>
      </div>

      <nav className="sticky top-0 z-50 bg-Darkblue text-White px-4 py-4 2xl:py-5 flex justify-between items-center md:px-10">
  <div>
    <Link
      className={`font-bold text-xl sm:text-2xl 2xl:text-xl ${BowlbyOne.className} hover:text-Hotpink`}
      href="/"
      prefetch={false}
    >
      FOOFEST
    </Link>
    <p className="text-md text-White font-normal">July 3rd - July 10th 2024</p>
  </div>

        <button
          className="text-White sm:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <ul className="hidden sm:flex items-center gap-4 md:gap-10">
          <li>
            <Link
              href="/booking"
              prefetch={false}
              className="bg-Hotpink font-bold text-sm md:text-mg 2xl:text-xl rounded-full py-1 px-2 md:px-6 md:py-2 hover:bg-Lightpink"
            >
              BUY TICKETS
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg 2xl:text-xl hover:text-Hotpink"
              href="/lineup"
              prefetch={false}
            >
              LINEUP
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg 2xl:text-xl hover:text-Hotpink"
              href="/schedule"
              prefetch={false}
            >
              SCHEDULE
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`fixed inset-0 bg-Darkblue text-White transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50 sm:hidden flex flex-col`}>
        <div className="bg-Hotpink py-2">
          <p className="text-xs sm:text-sm 2xl:text-xl text-White text-center font-medium tracking-wider">
            Camping Spots Still Available - Reserve Yours Today!
          </p>
        </div>
        <div className="flex justify-between items-center p-4">
           <div>
    <Link
      className={`font-bold text-xl sm:text-2xl 2xl:text-2xl ${BowlbyOne.className} hover:text-Hotpink`}
      href="/"
      prefetch={false}
    >
      FOOFEST
    </Link>
    <p className="text-md text-White font-regular">July 3rd - July 10th 2024</p>
  </div>
          <button
            className="text-White"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col justify-center items-center h-full space-y-12 overflow-y-auto bg-Navyblue">
          <li>
            <Link
              href="/booking"
              prefetch={false}
              className="bg-Hotpink font-bold text-xl rounded-full py-2 px-6 hover:bg-Lightpink"
              onClick={toggleMenu}
            >
              BUY TICKETS
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xl hover:text-Hotpink"
              href="/lineup"
              prefetch={false}
              onClick={toggleMenu}
            >
              LINEUP
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xl hover:text-Hotpink"
              href="/schedule"
              prefetch={false}
              onClick={toggleMenu}
            >
              SCHEDULE
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
