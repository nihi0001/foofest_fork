import React from 'react'
import Link from "next/link";


function LpBanner() {
  return (
    <div className="bg-[url('/lpBanner.png')] bg-cover bg-center p-12 h-screen">
    <div className="h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-White text-8xl">FOO FESTIVAL</h1>
          <p className="text-White text-6xl mb-6">2024</p>
          <Link className="bg-Hotpink text-White text-base p-3 px-6 rounded-full" href={`/lineup`} prefetch={false}>
            LINE UP
          </Link>
        </div>
    </div>
    </div>
  )
}

export default LpBanner
